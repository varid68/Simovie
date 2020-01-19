import React from 'react'
import { View, Text } from 'react-native'
import { DEEP } from '../../../configs/styles'
import { setCurrency, calculateMinutes } from '../../../services/common'
import styles from './DetailStyles'
import moment from 'moment'


const DescMovie = ({ detail }) => (
  <View style={{ backgroundColor: DEEP, padding: 20 }}>
    <View style={[styles.studioWrap, { marginTop: 5 }]}>
      <Text style={styles.studio}>Budget</Text>
      <Text style={styles.studioVal}>$ {setCurrency(detail.budget)} (Estimated)</Text>
    </View>
    <View style={styles.studioWrap}>
      <Text style={styles.studio}>Genre</Text>
      <Text style={styles.studioVal}>{detail.genres.map(e => e.name).join(', ')}</Text>
    </View>
    <View style={styles.studioWrap}>
      <Text style={styles.studio}>Release</Text>
      <Text style={styles.studioVal}>{moment(detail.release_date).format('DD MMMM YYYY')}</Text>
    </View>
    <View style={styles.studioWrap}>
      <Text style={styles.studio}>Release</Text>
      <Text style={styles.studioVal}>{calculateMinutes(detail.runtime)}</Text>
    </View>
    <View style={styles.studioWrap}>
      <Text style={styles.studio}>Studio</Text>
      <Text style={styles.studioVal}>{detail.production_companies.map(e => e.name).join(', ')}</Text>
    </View>
  </View>
)

export default DescMovie
