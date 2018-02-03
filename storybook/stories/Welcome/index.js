import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  }

  showApp(event) {
    event.preventDefault()
    if (this.props.showApp) this.props.showApp()
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Maxdream Documentación UI</Text>
        <Text style={this.styles.content}>
          Hola Maxi! este es un entorno de desarrollo para Apps hechas en React,
          y React Native. Acá vas a poder chusmear cada componente que cree de
          forma individual y ver como funcionan.
        </Text>
        <Text style={this.styles.content}>
          Las Stories están en "storybook/stories/index.js".
        </Text>
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