import { StyleSheet } from 'react-native'
import { EBONY, ITEMS_CENTER, WHITE, TEXT_MEDIUM } from '../../../configs/styles'

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
  }


  // CAROUSEL
})
