import { StyleSheet } from 'react-native'
import {
  EBONY, ITEMS_CENTER, WHITE, TEXT_MEDIUM, SCREEN_WIDTH,
  TEXT_SMALL, WHITE_ALT, GRAY_LIGHT
} from '../../../configs/styles'

export default StyleSheet.create({
  // HEADER
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: EBONY
  },
  title: {
    ...TEXT_MEDIUM,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    color: WHITE
  },
  iconWrap: {
    ...ITEMS_CENTER,
    height: 40,
    width: 40
  },


  // CARD LIST
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemWrap: {
    flexDirection: 'column',
    paddingLeft: 15
  },
  imgWrap: {
    height: 200,
    width: (SCREEN_WIDTH - 60) / 3,
    borderRadius: 3
  },
  titleWrap: {
    ...TEXT_SMALL,
    color: GRAY_LIGHT,
    height: 35,
    marginTop: 10,
    marginBottom: 25,
    width: (SCREEN_WIDTH - 60) / 3
  },


  // CAROUSEL
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: EBONY
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: WHITE_ALT
  },
  imgCarousel: {
    width: SCREEN_WIDTH - (0.21 * SCREEN_WIDTH),
    height: 0.48 * SCREEN_WIDTH,
    borderRadius: 5
  }

})
