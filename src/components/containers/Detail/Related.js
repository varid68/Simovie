import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './DetailStyles'


const Related = (props) => (
  <View style={styles.relatedWrap}>
    {
      props.related.map((item) => {
        const result = Math.round(item.vote_average / 2)

        return (
          <TouchableOpacity
            onPress={props.refetchAll.bind(null, item.id)}
            style={{ flex: 1 }}>
            <Image
              source={{ uri: `${TMDB_IMG_URL}/w185/${item.poster_path}` }}
              style={styles.relatedImg} />
            <Text numberOfLines={2} style={styles.relatedTitle}>{item.title}</Text>
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
      })
    }
  </View>
)

export default Related
