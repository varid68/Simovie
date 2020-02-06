import { Platform, Dimensions } from 'react-native'

// SCREEN WIDTH & HEIGHT
export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

// Fonts WebView
export const WEB_DEFAULT_FONT_FAMILY = Platform.OS === 'android' ? 'OpenSans-Regular' : '-apple-system'

// Fonts
export const DEFAULT_FONT_FAMILY = Platform.OS === 'android' ? 'OpenSans-Regular' : 'System'
export const DEFAULT_FONT_FAMILY_BOLD = Platform.OS === 'android' ? 'OpenSans-Bold' : 'System'
export const FONT_FAMILY_BOLDER = Platform.OS === 'android' ? 'OpenSans-ExtraBold' : 'System'

export const FONT_SIZE_TINY     = 8
export const FONT_SIZE_SMALLER  = 10
export const FONT_SIZE_SMALL    = 12
export const DEFAULT_FONT_SIZE  = 14
export const FONT_SIZE_MEDIUM   = 16
export const FONT_SIZE_LARGE    = 18
export const FONT_SIZE_LARGER   = 20

// Colors
export const WHITE            = '#ffffff'
export const WHITE_ALT        = '#f5f5f5'
export const BLACK_LIGHT      = '#4a4a4a'
export const BLACK            = '#333333'
export const BLACK_ALL        = '#000000'
export const GRAY_LIGHT       = '#d1d1d1'
export const GRAY_ALT         = '#eeeeee'
export const GRAY             = '#b6b6b6'
export const GRAY_10          = '#727272'
export const GRAY_DARK        = '#4c4c4c'
export const GRAY_DARK_75     = '#989898'
export const GRAY_DARK_ALT    = '#8c8c8c'
export const MERCURY          = '#e3e3e3'

export const BLUE             = '#5ca0d3'
export const OXFORD_BLUE      = '#313e4f'
export const YELLOW           = '#fcd307'
export const ORANGE           = '#FFB74D'
export const DEEP             = '#2c3848'
export const DEEPBLACK        = '#5b616b'
export const RED              = '#d3211f'
export const GREEN            = '#4caf50'
export const EBONY            = '#12162b'
export const BIGSTONE         = '#19223c'

// default set
export const TEXT_SMALLER = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALLER
}

export const TEXT_SMALL = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALL,
}

export const TEXT_BASE = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
}

export const TEXT_BASE_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  fontSize: DEFAULT_FONT_SIZE,
}

export const TEXT_MEDIUM = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_MEDIUM,
}

export const TEXT_MEDIUM_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontSize: FONT_SIZE_MEDIUM,
}

export const TEXT_LARGE = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_LARGE,
}

export const TEXT_LARGER_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  fontSize: FONT_SIZE_LARGER
}

// posisitions
export const LIST_ITEM_BASE = { // Basic list item
  flexDirection: 'row',
  justifyContent: 'space-between',
}

export const ALIGNING_ITEM_CENTER = {
  flexDirection: 'row',
  alignItems: 'center'
}

export const ROW_SPACE_CENTER = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const ITEMS_CENTER = {
  alignItems: 'center',
  justifyContent: 'center'
}
