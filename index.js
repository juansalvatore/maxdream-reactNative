// importing react and react native
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import AppIndex from './src/AppIndex'
import HotelsIndex from './src/HotelsIndex'
import HotelOne from './src/HotelOne'
import VideoComponent from './src/VideoComponent'

const Index = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="HotelsIndex" component={HotelsIndex} title="Hoteles" />
        <Scene key="HotelOne" component={HotelOne} title="" />
        <Scene key="AppIndex" component={AppIndex} title="" initial />
        <Scene key="videoComponent" component={VideoComponent} title="Video" />
      </Scene>
    </Router>
  )
}

// register app
AppRegistry.registerComponent('maxdream', () => Index)
