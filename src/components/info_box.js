import React from 'react'
import { Text, View, Image } from 'react-native'

const InfoBox = ({ image, text }) => {
  const { containerStyle, boxStyle, imageStyle } = styles

  return (
    <View style={boxStyle}>
      <Image style={imageStyle} source={image} />
      <View>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

const styles = {
  boxStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    elevation: 3,
  },
  imageStyle: {
    height: 200,
    marginBottom: 10,
  },
}

export default InfoBox
