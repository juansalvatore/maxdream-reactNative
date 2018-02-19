import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native'

import Row from './Row.js'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

RoundedCard = props => {
  const { linearGradient, searchStyle, textStyle } = styles
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        // colors={['#2fbeb5', '#41bae7']}
        colors={['#6389b1', '#7ec5ea']}
        style={linearGradient}
      >
        <View style={searchStyle}>
          <Icon name="search" size={40} color="#7ec5ea" />
          <Text style={textStyle}>{props.children}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = {
  linearGradient: {
    padding: 3,
    borderRadius: 50,
    minWidth: 100,
  },

  searchStyle: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginLeft: 35,
    fontSize: 20,
    fontWeight: 'bold',
  },
}

export default RoundedCard
