import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const HotelButton = ({ children, active, id }) => {
  const { buttonContainer, buttonText, activeButton, activeText } = styles
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={[buttonContainer, active && activeButton]}>
        <Text style={[buttonText, active && activeText]}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 5,
  },
  activeButton: {
    backgroundColor: 'rgba(11,92,148,0.8)',
  },
  activeText: {
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
  },
  buttonText: {},
}

export default HotelButton
