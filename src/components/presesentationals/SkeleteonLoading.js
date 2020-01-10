import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder'
import { GRAY } from '../../configs/styles'


export function PlaceholderLoading() {
  return [1].map((item, index) => (
    <View style={{ flex: 1, padding: 0 }} key={index}>
      <Placeholder Animation={Fade}>
        <View
          key={index}
          style={styles.cardContainer}>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <PlaceholderLine color={GRAY} width={100} height={184} style={{ borderRadius: 10 }} />
          </View>

          <View style={{ flexDirection: 'column', flex: 1, marginHorizontal: 15 }}>
            <PlaceholderLine color={GRAY} width={100} height={184} style={{ borderRadius: 10 }} />
          </View>

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <PlaceholderLine color={GRAY} width={100} height={184} style={{ borderRadius: 10 }} />
          </View>
        </View>
      </Placeholder>
    </View>
  ))
}

export function PlaceholderLoadingDetail() {
  return [1, 2, 3, 4, 5, 6].map((item, index) => (
    <View style={{ flex: 1, padding: 8 }} key={index}>
      <Placeholder Animation={Fade}>
        <View
          key={index}
          style={styles.cardContainer}>
          <View style={{ flex: 1 }}>
            <PlaceholderLine color={GRAY} width={40} height={8} />
            <PlaceholderLine color={GRAY} style={{ marginBottom: 5 }} width={100} height={14} />
            <PlaceholderLine color={GRAY} style={{ marginBottom: 5 }} width={90} height={12} />
            <PlaceholderLine color={GRAY} width={80} height={10} />
          </View>
        </View>
      </Placeholder>
    </View>
  ))
}

export default { PlaceholderLoading, PlaceholderLoadingDetail }

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    // width: '99%',
    flex: 1,
    marginTop: 1,
    marginLeft: 1,
    // padding: 10,
    borderRadius: 4,
    marginBottom: 5
  },
  mediaPlaceholder: {
    width: 135,
    height: 184,
    // width: 95,
    // height: 84,
    borderRadius: 4
  },
})
