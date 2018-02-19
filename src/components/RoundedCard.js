import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

RoundedCard = props => {
  const { linearGradient, textStyle } = styles
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        // colors={['#2fbeb5', '#41bae7']}
        colors={['#6389b1', '#7ec5ea']}
        style={linearGradient}
      >
        <View>{props.icon}</View>
        <Text style={textStyle}>{props.children}</Text>
      </LinearGradient>
    </View>
  )
}

const styles = {
  linearGradient: {
    flexDirection: 'column',
    maxHeight: 400,
    minHeight: 200,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 5,
    elevation: 3,
    shadowRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.95,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
  },
  textStyle: {
    padding: 0,
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
}
export default RoundedCard
