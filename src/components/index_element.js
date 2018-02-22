import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'

import Row from './Row'
import Column from './Column'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

// este comando solucion error 500 en caso de aparecer
// rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

// https://oblador.github.io/react-native-vector-icons/

IndexElement = props => {
  const { containerStyle, leftContainer, rightContainer } = styles
  return (
    <TouchableOpacity onPress={() => props.action()} style={containerStyle}>
      <View style={leftContainer}>{props.icon}</View>
      <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
      <View style={rightContainer}>{props.children}</View>
    </TouchableOpacity>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    minHeight: 140,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    marginBottom: 5,
    padding: 0,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 0,
    marginLeft: 25,
  },
  rightContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default IndexElement
