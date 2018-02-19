import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'
import Button from '../../../src/components/Button'

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 35,
      fontWeight: '700',
      marginBottom: 18,
      color: 'black',
    },
    content: {
      fontSize: 30,
      marginBottom: 10,
    },
  }

  showApp(event) {
    event.preventDefault()
    if (this.props.showApp) this.props.showApp()
  }

  render() {
    console.log(Actions)
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Maxdream Documentación UI</Text>
        <Text style={this.styles.content}>
          Hola Maxi! este es un entorno de desarrollo para Apps hechas en React,
          y React Native. Acá vas a poder chusmear cada componente que creé de
          forma individual y ver como funcionan.
        </Text>
        <Text style={[this.styles.content, { color: '#0b5c94', fontSize: 25 }]}>
          Para ver como usar cada componente ir a
          "./storybook/stories/index.js".
        </Text>
        <Button onPress={() => Actions.HotelsIndex()}>
          <Text>Go to APP</Text>
        </Button>
      </View>
    )
  }
}

Welcome.defaultProps = {
  showApp: null,
}

Welcome.propTypes = {
  showApp: PropTypes.func,
}
