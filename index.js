// importing react and react native
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import App from './src/App'
import AppTwo from './src/App-two'
import test from './src/components/Services'

const Index = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="appOne" component={App} title="Indice de hoteles" initial />
        <Scene key="appTwo" component={AppTwo} title="" />
      </Scene>
    </Router>
  )
}

// register app
AppRegistry.registerComponent('maxdream', () => Index)
