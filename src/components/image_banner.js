import React from 'react'
import { Text, View, Image } from 'react-native'

const ImageBanner = ({ image }) => {
  const { viewStyle, thumbnailStyle } = styles
  return (
    <View style={viewStyle}>
      <Image style={thumbnailStyle} source={image} />
    </View>
  )
}

const styles = {
  viewStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    elevation: 3,
    height: 300,
  },

  thumbnailStyle: {
    flex: 1,
    width: 820,
  },
}

export default ImageBanner
