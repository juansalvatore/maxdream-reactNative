// importing react and react native
import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, StatusBar } from 'react-native'

// components
import HotelNavigation from './components/hotel_navigation'
import Hotel from './components/Hotel.js'
import Services from './components/Services.js'
import ImageBanner from './components/image_banner'
import Row from './components/Row.js'
import InfoBox from './components/info_box'

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
            { id: 'hotel-1', name: 'Eco Sky', key: 'appOne' },
            { id: 'hotel-2', name: 'Hotel Piedras', key: 'appTwo' },
            { id: 'hotel-3', name: 'Grand Hotel Bariloche' },
            { id: 'hotel-4', name: 'Hotel Nevada' },
            { id: 'hotel-5', name: 'Hotel Concorde' },
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
export default App
