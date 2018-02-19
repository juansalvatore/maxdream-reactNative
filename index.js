// importing react and react native
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import StorybookUI from './storybook'

import AppIndex from './src/AppIndex'
import IndexElement from './src/components/index_element'
import HotelsIndex from './src/HotelsIndex'
import HotelOne from './src/HotelOne'
import VideoComponent from './src/VideoComponent'

const Index = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Agregarle initial a este componente para ver la documentación de UI */}
        <Scene key="StorybookUI" component={StorybookUI} title="StorybookUI" />

        <Scene key="HotelsIndex" component={HotelsIndex} title="Hoteles" />
        <Scene key="HotelOne" component={HotelOne} title="" initial />
        <Scene key="IndexElement" component={IndexElement} title="" />
        <Scene key="AppIndex" component={AppIndex} title="" />
        <Scene key="videoComponent" component={VideoComponent} title="Video" />
      </Scene>
    </Router>
  )
}

// register app
AppRegistry.registerComponent('maxdream', () => Index)
