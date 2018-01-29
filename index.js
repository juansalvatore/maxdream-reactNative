// importing react and react native
import React, { Component } from 'react'
import { View, AppRegistry, ScrollView } from 'react-native'

// components
import HotelNavigation from './src/components/hotel_navigation'
import Hotel from './src/components/Hotel.js'
import Services from './src/components/Services.js'
import ImageBanner from './src/components/image_banner'
import Row from './src/components/Row.js'
import InfoBox from './src/components/info_box'

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* top hotel navigation */}
      <HotelNavigation
        hotels={[
          { id: 'hotel-1', name: 'Hotel 1' },
          { id: 'hotel-2', name: 'Hotel 2' },
          { id: 'hotel-3', name: 'Hotel 3' },
          { id: 'hotel-4', name: 'Hotel 4' },
          { id: 'hotel-5', name: 'Hotel 5' },
        ]}
      />

      {/* hotel + services */}
      <Row>
        <Hotel image={require('./src/assets/img/hotel.png')} />
        <Services image={require('./src/assets/img/services.png')} />
      </Row>

      {/* images banners */}
      <ImageBanner image={require('./src/assets/img/concorde-1.png')} />
      <ImageBanner image={require('./src/assets/img/concorde-2.png')} />
      <ImageBanner image={require('./src/assets/img/concorde-3.png')} />
      <ImageBanner image={require('./src/assets/img/concorde-4.png')} />
      <ImageBanner image={require('./src/assets/img/concorde-5.png')} />

      {/* info sections with three or two info boxes */}
      <Row>
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
          aliquip ex ea commodo consequat."
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
      </Row>

      <ImageBanner image={require('./src/assets/img/bannerImage.jpg')} />

      <Row>
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
          aliquip ex ea commodo consequat."
        />
      </Row>
    </ScrollView>
  )
}

const styles = {
  contentContainer: {
    paddingVertical: 20,
  },
}

// register app
AppRegistry.registerComponent('maxdream', () => App)
