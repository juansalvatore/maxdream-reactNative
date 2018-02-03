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
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 300,
  },

  thumbnailStyle: {
    flex: 1,
    alignItems: 'stretch',
  },
}

export default ImageBanner
