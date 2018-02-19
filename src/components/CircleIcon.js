import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

CircleIcon = props => {
  const { linearGradient } = styles
  return (
    <View>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        // colors={['#2fbeb5', '#41bae7']}
        colors={['#6389b1', '#7ec5ea']}
        style={linearGradient}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: 0,
          }}
        >
          {props.children}
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = {
  linearGradient: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 5,
    elevation: 3,
    shadowRadius: 2,
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 0.95,
  },
}
export default CircleIcon
