import React from 'react'
import { Text, View, ImageBackground } from 'react-native'

import Row from './Row'
const ImageBanner = ({ image }) => {
  const {
    viewStyle,
    thumbnailStyle,
    titleStyleLeft,
    paragraphStyleLeft,
    titleStyleRight,
    paragraphStyleRight,
  } = styles
  return (
    <Row>
      <View style={viewStyle}>
        <ImageBackground style={thumbnailStyle} source={image}>
          {/* left text */}
          <Text style={titleStyleLeft}>TITLE</Text>
          <Text style={paragraphStyleLeft}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Text>
          {/* right text */}
          <Text style={titleStyleRight}>TITLE</Text>
          <Text style={paragraphStyleRight}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget.
          </Text>
        </ImageBackground>
      </View>
    </Row>
  )
}

const styles = {
  titleStyleLeft: {
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '700',
  },

  paragraphStyleLeft: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 18,
    width: 400,
  },

  titleStyleRight: {
    color: 'white',
    fontSize: 30,
    marginRight: 20,
    marginBottom: 10,
    fontWeight: '700',
    alignSelf: 'flex-end',
  },

  paragraphStyleRight: {
    color: 'white',
    marginRight: 20,
    marginBottom: 20,
    fontSize: 18,
    width: 400,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },

  viewStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginRight: 5,
    marginLeft: 5,
    elevation: 3,
    height: 300,
  },

  thumbnailStyle: {
    flex: 1,
    width: 820,
    justifyContent: 'flex-end',
  },
}

export default ImageBanner
