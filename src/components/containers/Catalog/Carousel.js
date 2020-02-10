import React, { useRef, useState, useContext } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { View, Dimensions, Image } from 'react-native'
import { CatalogContext } from './CatalogContext'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import styles from './CatalogStyles'


const SCREEN_WIDTH = Dimensions.get('window').width

const MyCarousel = () => {
  const carouselRef = useRef(null)
  const value = useContext(CatalogContext)

  const [activeSlide, setActiveSlide] = useState(0)

  const pagination = () => (
    <Pagination
      dotsLength={value.catalog.filter((e, i) => i < 6).length}
      activeDotIndex={activeSlide}
      containerStyle={{ backgroundColor: 'transparent', marginTop: -15 }}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  )


  return (
    <View style={styles.container}>
      <Carousel
        autoplay={true}
        loop={true}
        ref={carouselRef}
        renderItem={({ item }) => (
          <Image
            source={{ uri: `${TMDB_IMG_URL}/w300/${item.backdrop_path}` }}
            style={styles.imgCarousel} />
        )}
        data={value.catalog.filter((e, i) => i < 6)}
        sliderWidth={SCREEN_WIDTH - 10}
        contentContainerCustomStyle={{ height: 0.48 * SCREEN_WIDTH }}
        onSnapToItem={(index) => setActiveSlide(index)}
        itemWidth={SCREEN_WIDTH - (0.2 * SCREEN_WIDTH)} />
      {pagination()}
    </View>
  )
}

export default MyCarousel