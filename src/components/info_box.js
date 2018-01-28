import React from 'react'
import { Text, View, Image } from 'react-native'

const InfoBox = ({ image }) => {
  const { containerStyle, boxStyle, imageStyle } = styles

  return (
    <View style={containerStyle}>
      <View style={boxStyle}>
        <Image style={imageStyle} source={image} />
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </View>
      </View>
      <View style={boxStyle}>
        <Image style={imageStyle} source={image} />
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </View>
      </View>
      <View style={boxStyle}>
        <Image style={imageStyle} source={image} />
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },

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
  },
  imageStyle: {
    height: 200,
    marginBottom: 10,
  },
}

export default InfoBox
