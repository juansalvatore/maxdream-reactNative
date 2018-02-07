import React from 'react'
import { Text, View, ImageBackground } from 'react-native'

const ImageBanner = ({ image, title, paragraph }) => {
  const {
    viewStyle,
    thumbnailStyle,
    titleCenter,
    paragraphCenter,
    center,
  } = styles
  return (
    <View style={viewStyle}>
      <ImageBackground style={thumbnailStyle} source={image}>
        <View style={center}>
          <Text style={titleCenter}>{title}</Text>
          <Text style={paragraphCenter}>{paragraph}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = {
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleCenter: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },

  paragraphCenter: {
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    width: 400,
  },

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
    height: 300,
  },
}

export default ImageBanner
