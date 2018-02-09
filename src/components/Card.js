import React from 'react'
import { Text, View, Image } from 'react-native'

import Row from './Row'

// usar row englobando cada componente salvo el image_banner que ya ocupa toda la row

const Card = () => {
  const {
    wrapperStyle,
    containerStyle,
    imageStyle,
    textContainer,
    titleStyle,
    paragraphStyle,
  } = styles

  return (
    <Row>
      <View style={wrapperStyle}>
        <View style={containerStyle}>
          <Image
            style={imageStyle}
            source={require('../assets/img/bannerImage.jpg')}
          />
          <View style={textContainer}>
            <Text style={titleStyle}>Title</Text>
            <Text style={paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Text>
          </View>
        </View>
      </View>
    </Row>
  )
}

const styles = {
  titleStyle: {
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 10,
    color: 'black',
  },
  paragraphStyle: {
    fontSize: 18,
  },

  imageStyle: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'stretch',
  },

  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 25,
  },

  containerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
    height: 300,
    elevation: 3,
  },
  wrapperStyle: {
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
  },
}

export default Card
