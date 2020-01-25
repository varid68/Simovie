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
  ITEMS_CENTER, OPACITY_3, WHITE, LIST_ITEM_BASE, RED,
  DEEP, TEXT_BASE, YELLOW
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
  const [related, setRelated] = useState([])
  const [idMovie, setIdMovie] = useState(() => {
    return props.navigation.state.params.id
  })


  useEffect(() => {
    setLoading(true)

    dispatch(actions.getDetailMovie(idMovie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setDetail(res)
        setLoading(false)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getCastMovie(idMovie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setCast(res.cast)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getVideoLink(idMovie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setLink(res.results[0].key)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getReviewMovie(idMovie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setReview(res.results)
      } else {
        showToast(res.status_message)
      }
    })

    dispatch(actions.getRelatedMovie(idMovie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        const result = res.results.length > 3 ? res.results.slice(0, 3) : res.results
        setRelated(result)
      } else {
        showToast(res.status_message)
      }
    })
  }, [idMovie])

  const refetchAll = (id) => setIdMovie(id)

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
          <View style={{ backgroundColor: DEEP, flex: 1, ...ITEMS_CENTER }}>
            <Spinner size="large" />
            <Text style={{ color: WHITE }}>Please wait..</Text>
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
                    <Text style={styles.watchNowText}>WATCH TRAILER</Text>
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
                  <Related related={related} refetchAll={refetchAll} />
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
