import React from 'react'
import { Text, View, Image } from 'react-native'

const Row = ({ children }) => {
  const { containerStyle } = styles

  return <View style={containerStyle}>{children}</View>
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },
}

export default Row
