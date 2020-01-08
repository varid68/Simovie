import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import Spinner from '../../presesentationals/Spinner'
import {
  SCREEN_WIDTH, DEEP, ITEMS_CENTER, TEXT_SMALL_RED,
  OPACITY_3, WHITE, TEXT_LARGER_BOLD
} from '../../../configs/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './DetailStyles'

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
                  style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
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

            <View style={{
              flex: 1,
              backgroundColor: DEEP,
              paddingHorizontal: 15
            }}>
              <View style={styles.titleMovies}>
                <Text style={{ ...TEXT_LARGER_BOLD, color: WHITE }}>Aquaman</Text>
                <Image
                  style={{ height: 32 }}
                  source={require('../../../assets/images/4k-fullhd.png')} />
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
