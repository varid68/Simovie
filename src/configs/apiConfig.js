/* eslint no-multi-spaces:0 */
import Config from 'react-native-config'

export const CONTENT_TYPE_JSON  = 'application/json'
export const TYPE_AUTH          = 'Mobile'
export const TMDB_API_KEY       = Config.TMDB_API_KEY

export const IS_DEV             = true

const PRODUCTION                = 'https://emonica2.nusatek.id'
const APIDEV                    = 'https://api.themoviedb.org/3'

export const BASE_URL           = IS_DEV ? APIDEV : PRODUCTION
export const TMDB_IMG_URL       = 'https://image.tmdb.org/t/p'