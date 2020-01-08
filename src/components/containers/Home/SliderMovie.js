import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './HomeStyles'
import { WHITE, TEXT_SMALL, GRAY } from '../../../configs/styles'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import NavigationService from '../../../navigations/NavigationService'


export default function SliderMovie(props) {
  const keyExtractor = (item) => item.id.toString()

  const navigate = (id) => NavigationService.navigate('DetailScreen', { id })

  const renderItem = (item) => {
    const result = item.vote_average / 2

    return (
      <TouchableOpacity
        onPress={navigate.bind(null, item.id)}
        style={styles.itemSlider}>
        <Image source={{ uri: `${TMDB_IMG_URL}/w185/${item.poster_path}` }} style={styles.itemSliderImg} />
        <Text numberOfLines={2} style={{ ...TEXT_SMALL, color: WHITE, height: 35 }}>{item.title}</Text>
        <View style={{ flexDirection: 'row' }}>
          {[1, 2, 3, 4, 5].map(item => (
            <MaterialIcon key={item} name='star' style={[styles.starIcon, { opacity: item <= result ? 1 : .2 }]} />
          ))}
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={{ marginTop: 30 }}>
      <View style={styles.sliderTitle}>
        <Text style={{ ...TEXT_SMALL, color: WHITE }}>{props.title}</Text>
        <Text style={{ ...TEXT_SMALL, color: GRAY }}>See all</Text>
      </View>
      <FlatList
        data={props.list}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        horizontal />
    </View>
  )
}
