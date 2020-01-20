import { StyleSheet, Platform } from 'react-native'
import {
  BLUE, SCREEN_HEIGHT, ITEMS_CENTER, WHITE, SCREEN_WIDTH,
  ALIGNING_ITEM_CENTER, DEEP, LIST_ITEM_BASE, YELLOW, TEXT_SMALL,
  BLACK, BLACK_ALL
} from '../../../configs/styles'

export default StyleSheet.create({
  // HEADER
  header: {
    ...ITEMS_CENTER,
    flexDirection: 'column',
    paddingHorizontal: 35,
    backgroundColor: BLUE,
    height: SCREEN_HEIGHT / 3.5,
    elevation: 3
  },
  headerText: {
    fontSize: 25,
    color: WHITE,
    textAlign: 'center',
    marginBottom: 20
  },
  searchInput: {
    ...ALIGNING_ITEM_CENTER,
    height: 35,
    paddingLeft: 40,
    paddingBottom: Platform.OS == 'ios' ? 0 : 8,
    backgroundColor: WHITE,
    opacity: .7,
    borderRadius: 20,
    width: SCREEN_WIDTH / 1.4,
    color: BLACK
  },
  iconSearch: {
    position: 'absolute',
    left: 10,
    top: 5,
    color: BLACK_ALL,
    fontSize: 25
  },


  // index
  container: {
    marginTop: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: DEEP,
    paddingHorizontal: 15
  },


  // SLIDER MOVIE
  sliderTitle: {
    ...LIST_ITEM_BASE,
    alignItems: 'center'
  },
  itemSlider: {
    width: 135,
    marginRight: 15
  },
  itemSliderImg: {
    width: 135,
    height: 184,
    marginVertical: 10,
    borderRadius: 10
  },
  title: {
    ...TEXT_SMALL,
    color: WHITE,
    height: 35
  },
  starIcon: {
    marginTop: 5,
    color: YELLOW,
    fontSize: 18
  }
})
