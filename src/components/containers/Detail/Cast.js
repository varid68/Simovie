import React from 'react'
import { View, Image, Text, FlatList } from 'react-native'
import { GRAY, TEXT_SMALL } from '../../../configs/styles'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'

const Cast = (props) => {
  const renderItem = (item) => (
    <View style={{ flexDirection: 'column', width: 60, alignItems: 'center', marginRight: 15 }}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 20, marginBottom: 10 }}
        source={{ uri: `${TMDB_IMG_URL}/w185${item.profile_path}` }} />
      <Text numberOfLines={2} style={{ ...TEXT_SMALL, color: GRAY, textAlign: 'center' }}>{item.name}</Text>
    </View>
  )


  return (
    <FlatList
      horizontal
      data={props.cast}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => renderItem(item)}
      showsHorizontalScrollIndicator={false} />
  )
}

export default Cast