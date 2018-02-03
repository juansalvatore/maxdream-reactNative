import React from 'react'
import { Text, View } from 'react-native'

// usar row englobando cada componente salvo el image_banner que ya ocupa toda la row

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
