import React, { useContext } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './HomeStyles'
import { WHITE, TEXT_SMALL, GRAY } from '../../../configs/styles'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import NavigationService from '../../../navigations/NavigationService'
import { PlaceholderLoading } from '../../presesentationals/SkeleteonLoading'
import { HomeContext } from './HomeContext'


export default function SliderMovie(props) {
  const value = useContext(HomeContext)

  const keyExtractor = (item) => item.id.toString()

  const navigate = (id) => NavigationService.navigate('DetailScreen', { id })

  const renderItem = (item) => {
    const result = Math.round(item.vote_average / 2)

    return (
      <TouchableOpacity
        onPress={navigate.bind(null, item.id)}
        style={styles.itemSlider}>
        <Image
          source={{ uri: `${TMDB_IMG_URL}/w185/${item.poster_path}` }}
          style={styles.itemSliderImg} />
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <View style={{ flexDirection: 'row' }}>
          {[1, 2, 3, 4, 5].map(val => (
            <MaterialIcon
              key={val}
              name='star'
              style={[styles.starIcon, { opacity: val <= result ? 1 : .2 }]} />
          ))}
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={{ marginTop: 30 }}>
      <View style={styles.sliderTitle}>
        <Text style={{ ...TEXT_SMALL, color: WHITE }}>{props.title}</Text>
        <TouchableOpacity>
          <Text style={{ ...TEXT_SMALL, color: GRAY }}>See all</Text>
        </TouchableOpacity>
      </View>
      {
        value.loading ?
          <PlaceholderLoading />
          :
          <FlatList
            data={props.list}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => renderItem(item)}
            showsVerticalScrollIndicator={false}
            horizontal />
      }
    </View>
  )
}
