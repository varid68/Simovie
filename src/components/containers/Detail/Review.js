import React, { Fragment, memo } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { ALIGNING_ITEM_CENTER } from '../../../configs/styles'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './DetailStyles'


const Review = memo((props) => {
  const acakImage = () => {
    const source = [
      require('../../../assets/images/user1.png'),
      require('../../../assets/images/user2.png'),
      require('../../../assets/images/user3.png'),
      require('../../../assets/images/user4.png')
    ]

    const random = source[Math.floor(Math.random() * source.length)]
    return random
  }

  const renderItem = (item) => {
    const randomVote = Math.floor(Math.random() * 10) + 2

    return (
      <Fragment>
        <View style={ALIGNING_ITEM_CENTER}>
          <Image
            style={{ height: 40, width: 40 }}
            source={acakImage()} />
          <Text style={styles.author}>{item.author}</Text>
          <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5].map(item => (
              <MaterialIcon
                key={item}
                name='star'
                style={[styles.starIcon, { opacity: item <= Math.round((randomVote / 2)) ? 1 : .2 }]} />
            ))}
          </View>
        </View>

        <Text numberOfLines={5} style={styles.reviewText}>{item.content}</Text>

        <View style={styles.likeWrap}>
          <Text style={styles.counterLike}>
            {Math.floor(Math.random() * 20) + 0}
          </Text>
          <TouchableOpacity style={styles.likeBtn}>
            <MaterialIcon name='thumb-down' style={styles.like} />
          </TouchableOpacity>
          <Text style={[styles.counterLike, { marginRight: 35 }]}>
            {Math.floor(Math.random() * 100) + 10}
          </Text>
          <TouchableOpacity style={styles.likeBtn}>
            <MaterialIcon name='thumb-up' style={styles.like} />
          </TouchableOpacity>
        </View>
      </Fragment>
    )
  }

  return (
    <View style={{ backgroundColor: '#313e4f', padding: 20 }}>
      <FlatList
        data={props.review}
        keyExtractor={e => e.id.toString()}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false} />
    </View>
  )
})

export default Review
