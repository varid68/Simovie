import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import SliderMovie from './SliderMovie'
import { HomeContext } from './HomeContext'


export default function FragmentSlider() {
  const value = useContext(HomeContext)

  return (
    <ScrollView>
      <SliderMovie list={value.popular} title='RECOMMENDED FOR YOU' />
      <SliderMovie list={value.nowPlaying} title='NOW PLAYING' />
      <SliderMovie list={value.topRated} title='TOP RATED' />
    </ScrollView>
  )
}