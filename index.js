// importing react and react native
import React from 'react'
import { View, AppRegistry } from 'react-native'

// components
import ImageBanner from './src/components/image_banner'
import InfoSection from './src/components/info_section.js'
import InfoBox from './src/components/info_box'

const App = () => {
  return (
    <View>
      {/* image banner */}
      <ImageBanner image={require('./src/assets/img/bannerImage.jpg')} />
      {/* info sections with three or two info boxes */}
      <InfoSection>
        <InfoBox
          image={require('./src/assets/img/infoBox.jpg')}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <InfoBox
          image={require('./src/assets/img/infoBox.jpg')}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
        />
        <InfoBox
          image={require('./src/assets/img/infoBox.jpg')}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
        />
      </InfoSection>
    </View>
  )
}

// register app
AppRegistry.registerComponent('maxdream', () => App)
