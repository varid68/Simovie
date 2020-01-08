import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import Spinner from '../../presesentationals/Spinner'
import {
  ITEMS_CENTER, TEXT_SMALL_RED, OPACITY_3, WHITE, LIST_ITEM_BASE, GRAY
} from '../../../configs/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './DetailStyles'
import moment from 'moment'

export default function index(props) {
  const dispatch = useDispatch()

  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

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
  }, [])

  useEffect(() => {
    if (Object.keys(detail).length > 0) {
      Image.getSize(`${TMDB_IMG_URL}/w185${detail.poster_path}`, (width, height) => {
        setSize({ width, height })
      })
    }
  }, [detail])


  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} backgroundColor={OPACITY_3} translucent />
      {
        loading ?
          <View style={{ flex: 1, ...ITEMS_CENTER }}>
            <Spinner size="large" />
            <Text style={TEXT_SMALL_RED}>Loading</Text>
          </View>
          :
          <ScrollView style={{ flex: 1 }}>
            {size.width > 1 &&
              <View style={{ position: 'relative', zIndex: 99 }}>
                <Image
                  style={styles.imgPoster}
                  source={{ uri: `${TMDB_IMG_URL}/w185${detail.poster_path}` }} />
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
                  onPress={() => props.navigation.goBack()}>
                  <Ionicons
                    name="md-heart-empty"
                    color={WHITE}
                    style={{ fontSize: 30 }} />
                </TouchableOpacity>
              </View>
            }

            <View style={styles.contentWrap}>
              <View style={styles.titleMovies}>
                <Text style={styles.titleText}>{detail.title}</Text>
                <Image
                  style={styles.img}
                  source={require('../../../assets/images/4k-fullhd.png')} />
              </View>

              <View style={LIST_ITEM_BASE}>
                <View style={styles.watchNow}>
                  <Text style={styles.watchNowText}>WATCH NOW</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  {[1, 2, 3, 4, 5].map(item => (
                    <MaterialIcon key={item} name='star' style={[styles.starIcon, { opacity: .2 }]} />
                  ))}
                </View>
              </View>

              <Text style={{ color: GRAY, marginVertical: 15, lineHeight: 25 }}>{detail.overview}</Text>

              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Text style={{ flex: .3, color: WHITE }}>Studio</Text>
                <Text style={{ flex: 1, color: GRAY, lineHeight: 20 }}>{detail.production_companies.map(e => e.name).join(', ')}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Text style={{ flex: .3, color: WHITE }}>Genre</Text>
                <Text style={{ flex: 1, color: GRAY, lineHeight: 20 }}>{detail.genres.map(e => e.name).join(', ')}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Text style={{ flex: .3, color: WHITE }}>Release</Text>
                <Text style={{ flex: 1, color: GRAY }}>{moment(detail.release_date).format('DD MMMM YYYY')}</Text>
              </View>
            </View>
          </ScrollView>
      }
    </View>
  )
}

index.navigationOptions = {
  header: null
}
