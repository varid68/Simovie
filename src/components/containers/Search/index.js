import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StatusBar } from 'react-native'
import styles from './SearchStyles'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import { WHITE, TEXT_MEDIUM, GRAY, TEXT_SMALL, EBONY } from '../../../configs/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function index(props) {
  const disptach = useDispatch()

  const [list, setList] = useState([])

  useEffect(() => {
    const { movie } = props.navigation.state.params
    disptach(actions.getSearchMovie(movie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        console.log(res)
        setList(res.results)
      } else {
        showToast(res.status_message)
      }
    })
  }, [])

  const renderItem = (item) => {
    const result = Math.round(item.vote_average / 2)

    return (
      <View style={styles.itemWrap}>
        <Image
          style={styles.img}
          source={{ uri: `${TMDB_IMG_URL}/w185/${item.poster_path}` }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 155 }} />
          <View style={{ flex: 1 }}>
            <Text
              numberOfLines={2}
              style={{ color: WHITE, ...TEXT_MEDIUM }}>{item.title}</Text>
            <Text numberOfLines={2} style={{ color: GRAY, marginVertical: 5 }}>{item.overview}</Text>
            <Text style={{ color: GRAY, ...TEXT_SMALL }} >{moment(item.release_date).format('DD MMMM YYYY')}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                {[1, 2, 3, 4, 5].map(val => (
                  <MaterialIcon
                    key={val}
                    name='star'
                    style={[styles.starIcon, { opacity: val <= result ? 1 : .2 }]} />
                ))}
              </View>
              <Text style={{ color: '#FFB74D' }}>{item.vote_average}/10</Text>

            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={EBONY} />
      <View style={styles.searchWrap}>
        <Text style={{ color: WHITE, fontSize: 23, fontWeight: 'bold' }}>SIMOVIE</Text>
        <TouchableOpacity style={styles.search}>
          <MaterialIcon
            style={{ color: WHITE, fontSize: 30 }}
            name='search' />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false} />
    </View>
  )
}

index.navigationOptions = {
  header: null
}
