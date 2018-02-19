import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, TouchableOpacity } from 'react-native'

import HotelButton from './hotel_button'
import Row from './Row.js'
import InfoBox from './info_box'
import Button from './Button'

// import actions to move between views
import { Actions } from 'react-native-router-flux'

class HotelNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'hotel',
    }
  }
  render() {
    const { activeButton } = this.state
    const { touchableOpacityStyle } = styles

    return (
      <View style={styles.viewStyle}>
        <Row>
          <InfoBox
            image={require('../assets/img/bannerImage.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
          >
            <Button onPress={() => Actions.HotelOne()}>BUTTON TEXT</Button>
          </InfoBox>
          {/* { id: 'hotel-1', name: 'Eco Sky', key: 'appOne' },
              { id: 'hotel-2', name: 'Hotel Piedras', key: 'appTwo' },
              { id: 'hotel-3', name: 'Grand Hotel Bariloche' },
              { id: 'hotel-4', name: 'Hotel Nevada' },
              { id: 'hotel-5', name: 'Hotel Concorde' }, */}
          <InfoBox
            image={require('../assets/img/bannerImage.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
          >
            <Button onPress={() => Actions.HotelOne()}>BUTTON TEXT</Button>
          </InfoBox>

          <InfoBox
            image={require('../assets/img/bannerImage.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam."
          >
            <Button onPress={() => Actions.HotelOne()}>BUTTON TEXT</Button>
          </InfoBox>
        </Row>
      </View>
    )
  }
}

const styles = {
  touchableOpacityStyle: {
    flex: 1,
  },
  viewStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
}
export default HotelNavigation
