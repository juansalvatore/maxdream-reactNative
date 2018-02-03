// importing react and react native
import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, StatusBar } from 'react-native'

// components
import DynamicHotelNavigation from './components/hotel_navigation_dynamic'
import Hotel from './components/Hotel.js'
import Services from './components/Services.js'
import ImageBanner from './components/image_banner'
import Row from './components/Row.js'
import InfoBox from './components/info_box'
import Carousel from './components/Carousel'

const HotelsIndex = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* top bar color and style */}
        <StatusBar
          backgroundColor="rgba(11,92,148,0.8)"
          barStyle="light-content"
        />
        <Row>
          <Carousel
            items={[
              { key: 'page0', image: require('./assets/img/bannerImage.jpg') },
              { key: 'page2', image: require('./assets/img/bannerImage.jpg') },
              { key: 'page3', image: require('./assets/img/bannerImage.jpg') },
            ]}
          />
        </Row>

        {/* top hotel navigation */}
        <DynamicHotelNavigation
          hotels={[
            { id: '1', name: 'Hoteles', key: '1' },
            { id: '2', name: 'Fiestas', key: '2' },
            { id: '3', name: '3', key: '3' },
          ]}
        />
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
export default HotelsIndex
