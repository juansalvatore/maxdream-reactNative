import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import InfoBox from './components/info_box'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="hotel-navigation"
          component={InfoBox}
          title="Hotel navigation"
          initial
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
