import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { CatalogContext } from './CatalogContext'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import styles from './CatalogStyles'


export default function CardList() {
  const value = useContext(CatalogContext)

  return (
    <View style={styles.wrap}>
      {
        value.catalog.map(item => (
          <View key={item.id} style={styles.itemWrap}>
            <Image
              style={styles.imgWrap}
              source={{ uri: `${TMDB_IMG_URL}/w185/${item.poster_path}` }} />
            <Text
              numberOfLines={2}
              style={styles.titleWrap}>{item.title}</Text>
          </View>
        ))
      }
    </View>
  )
}