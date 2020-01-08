import React from 'react'
import { View, Text } from 'react-native'
import { GRAY } from '../../../configs/styles'
import styles from './DetailStyles'
import moment from 'moment'


const DescMovie = ({ production_companies, genres, release_date }) => (
  <View style={[styles.studioWrap, { marginTop: 15 }]}>
    <Text style={styles.studio}>Studio</Text>
    <Text style={styles.studioVal}>{production_companies.map(e => e.name).join(', ')}</Text>
  </View>
  <View style={styles.studioWrap}>
    <Text style={styles.studio}>Genre</Text>
    <Text style={styles.studioVal}>{genres.map(e => e.name).join(', ')}</Text>
  </View>
  <View style={styles.studioWrap}>
    <Text style={styles.studio}>Release</Text>
    <Text style={{ flex: 1, color: GRAY }}>{moment(release_date).format('DD MMMM YYYY')}</Text>
  </View>
)

export default DescMovie
