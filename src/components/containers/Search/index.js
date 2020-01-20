import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import styles from './SearchStyles'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions/home'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import { TMDB_IMG_URL } from '../../../configs/apiConfig'
import {
  WHITE, TEXT_MEDIUM, GRAY, TEXT_SMALL, EBONY, BLACK,
  LIST_ITEM_BASE, ORANGE, RED, ITEMS_CENTER
} from '../../../configs/styles'
import NavigationService from '../../../navigations/NavigationService'
import { Spinner } from 'native-base'
import { SafeAreaView } from 'react-navigation'


export default function index(props) {
  const disptach = useDispatch()

  const [list, setList] = useState([])
  const [search, setSearch] = useState({
    value: [],
    isSearching: false
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const { movie } = props.navigation.state.params
    getMovie(movie)
  }, [])

  const getMovie = (movie) => {
    setLoading(true)
    disptach(actions.getSearchMovie(movie)).then(res => {
      if (!res.hasOwnProperty('status_code')) {
        setList(res.results)
        setLoading(false)
      } else {
        showToast(res.status_message)
      }
    })
  }

  const navigate = (id) => NavigationService.navigate('DetailScreen', { id })

  const setter = (value) => setSearch({ ...search, value })

  const toggleSearch = () => setSearch({ value: '', isSearching: !search.isSearching })

  const onSubmit = () => {
    getMovie(search.value)
  }

  const renderItem = (item) => {
    const result = Math.round(item.vote_average / 2)

    return (
      <TouchableOpacity
        onPress={navigate.bind(null, item.id)}
        style={styles.itemWrap}>
        <Image
          style={styles.img}
          source={{ uri: `${TMDB_IMG_URL}/w185/${item.poster_path}` }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 155 }} />
          <View style={{ flex: 1 }}>
            <Text numberOfLines={2} style={{ color: WHITE, ...TEXT_MEDIUM }}>{item.title}</Text>
            <Text numberOfLines={2} style={{ color: GRAY, marginVertical: 5 }}>{item.overview}</Text>
            <Text style={{ color: GRAY, ...TEXT_SMALL }}>{moment(item.release_date).format('DD MMMM YYYY')}</Text>
            <View style={LIST_ITEM_BASE}>
              <View style={{ flexDirection: 'row' }}>
                {[1, 2, 3, 4, 5].map(val => (
                  <MaterialIcon
                    key={val}
                    name='star'
                    style={[styles.starIcon, { opacity: val <= result ? 1 : .2 }]} />
                ))}
              </View>
              <Text style={{ color: ORANGE }}>{item.vote_average}/10</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView
      forceInset={{ bottom: 'never' }}
      style={styles.wrapper}>

      <StatusBar backgroundColor={EBONY} />

      {
        search.isSearching ?
          <View style={styles.searchActive}>
            <TouchableOpacity
              onPress={toggleSearch}
              style={styles.searchIcon}>
              <MaterialIcon name='arrow-back' style={{ color: WHITE, fontSize: 30 }} />
            </TouchableOpacity>
            <TextInput
              onSubmitEditing={onSubmit}
              returnKeyType='search'
              value={search.value}
              onChangeText={text => setter(text)}
              placeholder='Search movie here..'
              style={styles.searchInput} />
            <TouchableOpacity
              onPress={() => setSearch({ ...search, value: '' })}
              style={styles.closeIcon}>
              <MaterialIcon name='close' style={{ color: BLACK, fontSize: 30 }} />
            </TouchableOpacity>
          </View>
          :
          <View style={styles.searchWrap}>
            <Text style={styles.simovie}>SIMOVIE</Text>
            <TouchableOpacity
              onPress={toggleSearch}
              style={styles.search}>
              <MaterialIcon
                style={{ color: WHITE, fontSize: 30 }}
                name='search' />
            </TouchableOpacity>
          </View>
      }

      {
        list.length < 1 && !loading ?
          <View style={styles.notFoundWrap}>
            <Image
              style={styles.imgNotFound}
              source={require('../../../assets/images/not_found2.png')} />
            <Text style={styles.noResult}>No result found</Text>
            <Text style={styles.subNoResult}>Try different keywords or remove search filters</Text>
          </View>
          : loading ?
            <View style={{ ...ITEMS_CENTER }}>
              <Spinner color={RED} />
              <Text style={{ color: WHITE }}>Please wait, loading movie</Text>
            </View> :
            <FlatList
              data={list}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => renderItem(item)}
              showsVerticalScrollIndicator={false} />
      }

    </SafeAreaView>
  )
}

index.navigationOptions = {
  header: null
}
