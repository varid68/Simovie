import { Platform, Dimensions, StyleSheet, StatusBar } from 'react-native'
//import { isIphoneX } from "react-native-iphone-x-helper" //should installed next

// SCREEN WIDTH & HEIGHT
export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

// Status Bar Height
//export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (isIphoneX() ? 39 : 20) : 0

// Fonts WebView
export const WEB_DEFAULT_FONT_FAMILY = Platform.OS === 'android' ? 'OpenSans-Regular' : '-apple-system'

// HEADER
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// Fonts
export const DEFAULT_FONT_FAMILY = Platform.OS === 'android' ? 'OpenSans-Regular' : 'System'
export const DEFAULT_FONT_FAMILY_BOLD = Platform.OS === 'android' ? 'OpenSans-Bold' : 'System'
export const FONT_FAMILY_BOLDER = Platform.OS === 'android' ? 'OpenSans-ExtraBold' : 'System'

export const DEFAULT_FONT_SIZE  = 14
export const FONT_SIZE_LARGER   = 20
export const FONT_SIZE_LARGE    = 18
export const FONT_SIZE_MEDIUM   = 16
export const FONT_SIZE_SMALL    = 12
export const FONT_SIZE_SMALLER  = 10
export const FONT_SIZE_TINY     = 8

// Colors
export const GHOST            = '#ced4da'
export const WHITE            = '#ffffff'
export const WHITE_ALT        = '#f5f5f5'
export const BLACK_LIGHT      = '#4a4a4a'
export const BLACK            = '#333333'
export const BLACK_15         = '#33333326'
export const BLACK_50         = '#3333337f'
export const BLACK_75         = '#333333bf'
export const BLACK_ALL        = '#000000'
export const GRAY_LIGHT       = '#d1d1d1'
export const GRAY_ALT         = '#eeeeee'
export const GRAY             = '#b6b6b6'
export const GRAY_10          = '#727272'
export const GRAY_DARK        = '#4c4c4c'
export const GRAY_DARK_75     = '#989898'
export const GRAY_DARK_ALT    = '#8c8c8c'
export const MERCURY          = '#e3e3e3'
export const TRANSPARENT      = 'transparent'

export const BLUE             = '#5ca0d3'
export const YELLOW           = '#fcd307'
export const DEEP             = '#2c3848'
export const DEEPBLACK        = '#5b616b'
export const RED              = '#d3211f'
export const GREEN            = '#4caf50'



// Button Opacity
export const ACTIVE_OPACITY = 0.7
export const OPACITY_MODAL  = 'rgba(0, 0, 0, 0.5)'
export const OPACITY_LIGHT  = 'rgba(0, 0, 0, 0.1)'
export const OPACITY_3      = 'rgba(0, 0, 0, 0.3)'

// default set
export const LAYOUT_PADDING = {
  flex: 1,
  paddingHorizontal: 20,
  paddingVertical: 20
}

// text styles
export const TEXT_BASE = { // Default font & font size
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
}

export const TEXT_LARGE = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_LARGE,
}

export const TEXT_MEDIUM = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_MEDIUM,
}

export const TEXT_MEDIUM_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontSize: FONT_SIZE_MEDIUM,
}

export const TEXT_SMALL = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALL,
}

export const TEXT_SMALL_RED = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALL,
  color: RED
}

export const TEXT_SMALL_GREEN = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontSize: FONT_SIZE_SMALL,
  color: GREEN
}

export const TEXT_SMALLER = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALLER
}

export const TEXT_BASE_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  fontSize: DEFAULT_FONT_SIZE,
}

export const TEXT_LARGER_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  fontSize: FONT_SIZE_LARGER
}

export const TEXT_BOLDER = {
  fontFamily: FONT_FAMILY_BOLDER,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
}

export const TEXT_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
}

export const TEXT_HEADING = { // Heading
  ...TEXT_BASE_BOLD,
  color: BLACK,
  marginBottom: 10,
}

export const TEXT_TITLE = { // Title
  ...TEXT_LARGE,
  color: BLACK,
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

// input 
export const FLOATING_INPUT = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: 15,
  color: BLACK,
  marginTop: -3,
  marginBottom: -3,
}

// line
export const SEPARATOR_LINE = { // line bottom
  borderBottomColor: GRAY,
  borderBottomWidth: StyleSheet.hairlineWidth,
}

export const SEPARATOR_TOP = {
  borderTopColor: GRAY,
  borderTopWidth: StyleSheet.hairlineWidth
}

// red box small
export const RED_SMALL_BOX = {
  ...ITEMS_CENTER,
  paddingVertical: 2,
  paddingHorizontal: 4,
  width: '100%',
  borderRadius: 5,
  backgroundColor: RED,
}

export const RED_EXTRA_SMALL_BOX = {
  ...ITEMS_CENTER,
  borderRadius: 5,
  backgroundColor: RED,
}

export const LABEL = {
  ...TEXT_SMALL,
  color: GRAY_DARK_75
}
