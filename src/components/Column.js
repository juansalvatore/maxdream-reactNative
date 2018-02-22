import React from 'react'
import { Text, View } from 'react-native'

// usar row englobando cada componente salvo el image_banner que ya ocupa toda la row

const Column = ({ children }) => {
  const { containerStyle } = styles

  return <View style={containerStyle}>{children}</View>
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },
}

export default Column
