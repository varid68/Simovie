import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder'
import { WHITE } from '../../configs/styles'


export function PlaceholderLoading() {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <Placeholder Animation={Fade}>
          <PlaceholderLine height={170} style={styles.skeleton} />
        </Placeholder>
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Placeholder Animation={Fade}>
          <PlaceholderLine height={170} style={styles.skeleton} />
        </Placeholder>
      </View>
      <View style={{ flex: 1 }}>
        <Placeholder Animation={Fade}>
          <PlaceholderLine height={170} style={styles.skeleton} />
        </Placeholder>
      </View>
    </View>
  )
}

export default { PlaceholderLoading }

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 15
  },
  skeleton: {
    backgroundColor: WHITE,
    marginBottom: 0,
    borderRadius: 5
  }
})
