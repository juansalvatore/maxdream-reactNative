// importing react and react native
import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, StatusBar } from 'react-native'

// components
import HotelNavigation from './src/components/hotel_navigation'
import Hotel from './src/components/Hotel.js'
import Services from './src/components/Services.js'
import ImageBanner from './src/components/image_banner'
import Row from './src/components/Row.js'
import InfoBox from './src/components/info_box'

const App = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* top bar color and style */}
        <StatusBar
          backgroundColor="rgba(11,92,148,0.8)"
          barStyle="light-content"
        />

        {/* top hotel navigation */}
        <HotelNavigation
          hotels={[
            { id: 'hotel-1', name: 'Eco Sky' },
            { id: 'hotel-2', name: 'Hotel Piedras' },
            { id: 'hotel-3', name: 'Grand Hotel Bariloche' },
            { id: 'hotel-4', name: 'Hotel Nevada' },
            { id: 'hotel-5', name: 'Hotel Concorde' },
          ]}
        />

        {/* hotel + services */}
        <Row>
          <Hotel image={require('./src/assets/img/bannerImage.jpg')} />
          <Services image={require('./src/assets/img/bannerImage.jpg')} />
        </Row>

        {/* images banners */}
        <ImageBanner image={require('./src/assets/img/bannerImage.jpg')} />
        <ImageBanner image={require('./src/assets/img/bannerImage.jpg')} />
        <ImageBanner image={require('./src/assets/img/bannerImage.jpg')} />

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
    </View>
  )
}

const styles = {
  contentContainer: {
    paddingVertical: 20,
  },
}

// register app
AppRegistry.registerComponent('maxdream', () => App)
