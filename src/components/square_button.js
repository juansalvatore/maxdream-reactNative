import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'

Button = props => {
  const { buttonStyle, textStyle } = styles
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
        <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    padding: 5,
    elevation: 3,
  },
  textStyle: {
    fontWeight: 'bold',
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
export default Button
