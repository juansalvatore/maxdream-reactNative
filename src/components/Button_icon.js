import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

import { Actions } from 'react-native-router-flux'

import Row from './Row'

ButtonIcon = props => {
  const {
    buttonStyle,
    textStyle,
    iconStyle,
    linearGradient,
    numberStyle,
  } = styles
  const size = 28

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        // colors={['#2fbeb5', '#41bae7']}
        colors={['#6389b1', '#7ec5ea']}
        style={styles.linearGradient}
      >
        <View
          style={{
            height: 60,
            width: 8,
            backgroundColor: '#1dadea',
          }}
        />
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={numberStyle}>{props.left}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={textStyle}>{props.children}</Text>
          </View>
          <View style={iconStyle}>{props.right}</View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = {
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    elevation: 3,
    shadowRadius: 2,
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 0.95,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: 200,
    backgroundColor: '#ffffff',
    backgroundColor: 'transparent',
  },
  textStyle: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
  },
  numberStyle: {
    marginLeft: 20,
    fontSize: 35,
    color: 'white',
  },
  iconStyle: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
}

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
}

export default ButtonIcon
