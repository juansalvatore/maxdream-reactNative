import React from 'react'
import { Text, View, Image } from 'react-native'

const Hotel = ({ image }) => {
  const { viewStyle, thumbnailStyle } = styles
  return (
    <View style={viewStyle}>
      <Image style={thumbnailStyle} source={image} />
    </View>
  )
}

const styles = {
  viewStyle: {
    flex: 1.3,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    elevation: 3,
    height: 300,
  },

  thumbnailStyle: {
    flex: 1,
    width: 440,
  },
}

export default Hotel
