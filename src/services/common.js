import { ToastAndroid } from 'react-native'

// TAMPILKAN TOAST
export function showToast(text, option = null) {
  const duration = option == null ? ToastAndroid.LONG : ToastAndroid.SHORT
  ToastAndroid.showWithGravityAndOffset(
    text,
    duration,
    ToastAndroid.BOTTOM,
    25, 50,
  )
}

// KAPITALISASI TIAP KATA
export function capitalize(text) {
  const result = text.toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  return result
}

// 
export function calculateMinutes(number) {
  let hour = Math.floor(number / 60)
  let minutes = (number - (hour * 60))

  return `${hour} hour ${minutes} minutes`
}
