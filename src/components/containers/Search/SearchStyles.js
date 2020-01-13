import { StyleSheet } from 'react-native'
import {
  YELLOW, EBONY, BIGSTONE, LIST_ITEM_BASE, ALIGNING_ITEM_CENTER
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
  }
})
