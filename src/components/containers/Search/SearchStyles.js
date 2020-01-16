import { StyleSheet } from 'react-native'
import {
  YELLOW, EBONY, BIGSTONE, LIST_ITEM_BASE, ALIGNING_ITEM_CENTER, WHITE, ITEMS_CENTER, GRAY
} from '../../../configs/styles'

export default StyleSheet.create({
  // 
  wrapper: {
    padding: 15,
    flex: 1,
    backgroundColor: EBONY
  },
  searchWrap: {
    ...LIST_ITEM_BASE,
    alignItems: 'center'
  },
  search: {
    ...ALIGNING_ITEM_CENTER,
    height: 40,
    width: 40
  },
  searchActive: {
    flexDirection: 'row'
  },
  searchInput: {
    paddingLeft: 10,
    backgroundColor: WHITE,
    flex: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 45
  },
  closeIcon: {
    ...ALIGNING_ITEM_CENTER,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: WHITE,
    height: 45,
    width: 40
  },
  searchIcon: {
    ...ALIGNING_ITEM_CENTER,
    width: 45,
    height: 40
  },
  simovie: {
    color: WHITE,
    fontSize: 23,
    fontWeight: 'bold'
  },
  itemWrap: {
    backgroundColor: BIGSTONE,
    padding: 15,
    borderRadius: 5,
    marginTop: 55,
    position: 'relative'
  },
  img: {
    width: 135,
    height: null,
    position: 'absolute',
    top: -35,
    left: 15,
    bottom: 15,
    borderRadius: 5
  },
  starIcon: {
    marginTop: 5,
    color: YELLOW,
    fontSize: 20
  },
  notFoundWrap: {
    ...ITEMS_CENTER,
    flex: 1,
    flexDirection: 'column'
  },
  imgNotFound: {
    width: 200,
    height: 300,
    resizeMode: 'contain'
  },
  noResult: {
    color: WHITE,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subNoResult: {
    color: GRAY,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25
  }
})
