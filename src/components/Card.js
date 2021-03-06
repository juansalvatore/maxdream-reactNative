import React from 'react'
import { Text, View, Image } from 'react-native'

import Row from './Row'

// usar row englobando cada componente salvo el image_banner que ya ocupa toda la row

const Card = ({ image, title, paragraph, children }) => {
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
          <Image style={imageStyle} source={image} />
          <View style={textContainer}>
            <Text style={titleStyle}>{title}</Text>
            <Text style={paragraphStyle}>{paragraph}</Text>
            {children}
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
    marginBottom: 25,
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
    marginRight: 25,
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
