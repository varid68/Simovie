import { StyleSheet } from 'react-native'
import {
  LIST_ITEM_BASE, SCREEN_WIDTH, YELLOW, DEEPBLACK, DEEP,
  WHITE, TEXT_SMALL
} from '../../../configs/styles'

export default StyleSheet.create({
  imgPoster: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  arrowBackIcon: {
    position: 'absolute',
    top: 45,
    opacity: .8,
    height: 50,
    width: 50
  },
  contentWrap: {
    flex: 1,
    backgroundColor: DEEP,
    paddingHorizontal: 25,
    marginTop: -15
  },
  titleMovies: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 15
  },
  titleText: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    color: WHITE
  },
  img: {
    width: 35,
    height: null,
    resizeMode: 'contain',
    opacity: .3
  },
  watchNow: {
    backgroundColor: DEEPBLACK,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  watchNowText: {
    ...TEXT_SMALL,
    fontWeight: 'bold',
    color: WHITE
  },
  starIcon: {
    marginTop: 5,
    color: YELLOW,
    fontSize: 18
  },
})
