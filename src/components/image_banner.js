import React from 'react'
import { Text, View, Image } from 'react-native'

import Row from './Row'
const ImageBanner = ({ image }) => {
  const { viewStyle, thumbnailStyle } = styles
  return (
    <Row>
      <View style={viewStyle}>
        <Image style={thumbnailStyle} source={image} />
      </View>
    </Row>
  )
}

const styles = {
  viewStyle: {
    flex: 1,
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
    height: 360,
  },

  thumbnailStyle: {
    flex: 1,
    width: 820,
    resizeMode: 'contain',
  },
}

export default ImageBanner
