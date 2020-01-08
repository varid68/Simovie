import { StyleSheet } from 'react-native'
import { LIST_ITEM_BASE } from '../../../configs/styles'

export default StyleSheet.create({
  titleMovies: {
    ...LIST_ITEM_BASE
  },
  arrowBackIcon: {
    position: 'absolute',
    top: 45,
    opacity: .8,
    height: 50,
    width: 50
  }
})
