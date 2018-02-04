import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'

import Row from './Row'

import Icon from 'react-native-vector-icons/FontAwesome'

// este comando solucion error 500 en caso de aparecer
// rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

// https://oblador.github.io/react-native-vector-icons/

IndexElement = props => {
  const { containerStyle, leftContainer, rightContainer } = styles
  const size = 28
  return (
    <Row>
      <View style={{ flex: 0 }}>
        <View style={containerStyle}>
          <View style={leftContainer}>
            <Icon name="bus" size={size} color="black" />
            <Icon name="plane" size={size} color="black" />
          </View>
          <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
          <View style={rightContainer}>
            <Text>Icon</Text>
          </View>
        </View>

        <View style={containerStyle}>
          <View style={leftContainer}>
            <Icon name="hotel" size={size} color="black" />
          </View>
          <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
          <View style={rightContainer}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </View>
        </View>

        <View style={containerStyle}>
          <View style={leftContainer}>
            <Icon name="globe" size={size} color="black" />
          </View>
          <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
          <View style={rightContainer}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={containerStyle}>
          <View style={leftContainer}>
            <Icon name="male" size={size} color="black" />
          </View>
          <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
          <View style={rightContainer}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </View>
        </View>

        <View style={containerStyle}>
          <View style={leftContainer}>
            <Icon name="tree" size={size} color="black" />
          </View>
          <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
          <View style={rightContainer}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </View>
        </View>

        <View style={containerStyle}>
          <View style={leftContainer}>
            <Icon name="leaf" size={size} color="black" />
            <Icon name="safari" size={size} color="black" />
            <Icon name="paper-plane-o" size={size} color="black" />
          </View>
          <View style={{ marginLeft: 20, width: 1, backgroundColor: '#ccc' }} />
          <View style={rightContainer}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </View>
        </View>
      </View>
    </Row>
  )
}

const styles = {
  containerStyle: {
    width: 370,
    minHeight: 100,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    marginBottom: 5,
    padding: 0,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    marginRight: 5,
  },
  leftContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 0,
    marginLeft: 25,
    height: 180,
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default IndexElement
