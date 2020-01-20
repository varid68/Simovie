import { StyleSheet } from 'react-native'
import {
  SCREEN_WIDTH, YELLOW, DEEPBLACK, WHITE, TEXT_SMALL, GRAY,
  GRAY_DARK, GRAY_ALT, ALIGNING_ITEM_CENTER, TEXT_BASE_BOLD
} from '../../../configs/styles'

export default StyleSheet.create({
  imgPoster: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH - 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 98
  },
  arrowBackIcon: {
    position: 'absolute',
    top: 45,
    opacity: .8,
    height: 50,
    width: 50,
    zIndex: 99
  },
  contentWrap: {
    paddingHorizontal: 25,
    marginBottom: 10,
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
  overview: {
    color: GRAY,
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 25
  },
  tabWrap: {
    elevation: 0,
    borderBottomColor: GRAY_DARK,
    borderBottomWidth: 1
  },


  // DESC MOVIE
  studioWrap: {
    flexDirection: 'row',
    marginBottom: 8
  },
  studio: {
    flex: .3,
    color: WHITE
  },
  studioVal: {
    ...TEXT_SMALL,
    flex: 1,
    color: GRAY,
    lineHeight: 20
  },
  descMovieWrap: {
    flexDirection: 'column',
    width: 60,
    alignItems: 'center',
    marginRight: 15
  },
  imgDescMovie: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginBottom: 10
  },
  imgCastName: {
    ...TEXT_SMALL,
    color: GRAY,
    textAlign: 'center'
  },

  // REVIEW
  author: {
    flex: 1,
    marginLeft: 15,
    color: WHITE,
    fontWeight: 'bold'
  },
  reviewText: {
    fontSize: 13,
    color: GRAY_ALT,
    lineHeight: 22,
    paddingVertical: 10
  },
  likeWrap: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: GRAY_DARK
  },
  counterLike: {
    ...TEXT_SMALL,
    color: WHITE
  },
  likeBtn: {
    ...ALIGNING_ITEM_CENTER,
    width: 30,
    height: 30
  },
  like: {
    color: WHITE,
    fontSize: 20
  },
  noReview: {
    ...TEXT_BASE_BOLD,
    textAlign: 'center',
    color: WHITE
  }
})
