import React, { useState, useEffect, Fragment } from 'react'
import {
  View, Text, StatusBar, Image, ScrollView,
  TouchableOpacity, Linking, FlatList
} from 'react-native'
import { Tabs, Tab } from 'native-base'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import Spinner from '../../presesentationals/Spinner'
import {
  ITEMS_CENTER, TEXT_SMALL_RED, OPACITY_3, WHITE,
  LIST_ITEM_BASE, RED, DEEP, TEXT_BASE, YELLOW
} from '../../../configs/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './DetailStyles'
import DescriptionMovie from './DescMovie'
import ReviewMovie from './Review'
import Related from './Related'

export default function index(props) {
  const dispatch = useDispatch()

  const [detail, setDetail] = useState({})
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [link, setLink] = useState('')
  const [review, setReview] = useState([])


  useEffect(() => {
    const { id } = props.navigation.state.params
    dispatch(actions.getDetailMovie(id)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setDetail(res)
        setLoading(false)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getCastMovie(id)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setCast(res.cast)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getVideoLink(id)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setLink(res.results[0].key)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getReviewMovie(id)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setReview(res.results)
      } else {
        showToast(res.status_message)
      }
    })
  }, [])

  const toggleLiked = () => setLiked(!liked)

  const openYoutube = () => {
    const url = `https://www.youtube.com/watch?v=${link}`
    Linking.openURL(url).catch()
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        hidden={false}
        backgroundColor={OPACITY_3}
        translucent />
      {
        loading ?
          <View style={{ flex: 1, ...ITEMS_CENTER }}>
            <Spinner size="large" />
            <Text style={TEXT_SMALL_RED}>Loading</Text>
          </View>
          :
          <Fragment>
            <TouchableOpacity
              style={[styles.arrowBackIcon, { left: 20 }]}
              onPress={() => props.navigation.goBack()}>
              <Ionicons
                name="md-arrow-back"
                color={WHITE}
                style={{ fontSize: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.arrowBackIcon, { right: 0 }]}
              onPress={toggleLiked}>
              <Ionicons
                name={liked ? 'md-heart' : 'md-heart-empty'}
                color={liked ? RED : WHITE}
                style={{ fontSize: 30 }} />
            </TouchableOpacity>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: DEEP }}>
              <Image
                style={styles.imgPoster}
                source={{ uri: `${TMDB_IMG_URL}/w185${detail.poster_path}` }} />

              <View style={styles.contentWrap}>
                <View style={styles.titleMovies}>
                  <Text style={styles.titleText}>{detail.title}</Text>
                  <Image
                    style={styles.img}
                    source={require('../../../assets/images/4k-fullhd.png')} />
                </View>

                <View style={LIST_ITEM_BASE}>
                  <TouchableOpacity
                    onPress={openYoutube}
                    style={styles.watchNow}>
                    <Text style={styles.watchNowText}>WATCH NOW</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row' }}>
                    {[1, 2, 3, 4, 5].map(item => (
                      <MaterialIcon
                        key={item}
                        name='star'
                        style={[styles.starIcon, { opacity: item <= Math.round((detail.vote_average / 2)) ? 1 : .2 }]} />
                    ))}
                  </View>
                </View>

                <Text style={styles.overview}>{detail.overview}</Text>

                <FlatList
                  horizontal
                  data={cast}
                  keyExtractor={item => item.id.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={styles.descMovieWrap}>
                      <Image
                        style={styles.imgDescMovie}
                        source={{ uri: `${TMDB_IMG_URL}/w185${item.profile_path}` }} />
                      <Text numberOfLines={2} style={styles.imgCastName}>{item.name}</Text>
                    </View>
                  )} />
              </View>

              <Tabs
                tabBarUnderlineStyle={{ backgroundColor: YELLOW, height: 2 }}
                tabContainerStyle={styles.tabWrap}>
                <Tab
                  textStyle={{ color: WHITE, ...TEXT_BASE }}
                  activeTabStyle={{ backgroundColor: DEEP }}
                  activeTextStyle={{ color: YELLOW }}
                  tabStyle={{ backgroundColor: DEEP }}
                  heading="Detail">
                  <DescriptionMovie cast={cast} detail={detail} />
                </Tab>
                <Tab
                  textStyle={{ color: WHITE, ...TEXT_BASE }}
                  activeTabStyle={{ backgroundColor: DEEP }}
                  activeTextStyle={{ color: YELLOW }}
                  tabStyle={{ backgroundColor: DEEP }}
                  heading="Related">
                  <Related />
                </Tab>
                <Tab
                  textStyle={{ color: WHITE, ...TEXT_BASE }}
                  activeTabStyle={{ backgroundColor: DEEP }}
                  activeTextStyle={{ color: YELLOW }}
                  tabStyle={{ backgroundColor: DEEP }}
                  heading="Review">
                  <ReviewMovie review={review} />
                </Tab>
              </Tabs>
            </ScrollView>
          </Fragment>
      }
    </View>
  )
}

index.navigationOptions = {
  header: null
}
