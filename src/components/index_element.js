import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

// este comando solucion error 500 en caso de aparecer
// rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

IndexElement = props => {
  const { containerStyle, leftContainer, rightContainer } = styles
  return (
    <View>
      <View style={containerStyle}>
        <View style={leftContainer}>
          <Icon name="glass" size={20} color="black" />
        </View>
        <View style={rightContainer}>
          <Text>Icon</Text>
        </View>
      </View>
      <View style={containerStyle}>
        <View style={leftContainer}>
          <Text>Icon</Text>
        </View>
        <View style={rightContainer}>
          <Text>Icon</Text>
          <Text>Icon</Text>
          <Text>Icon</Text>
          <Text>Icon</Text>
        </View>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    width: 300,
    minHeight: 100,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 50,
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default IndexElement
