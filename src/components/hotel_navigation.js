import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, TouchableOpacity } from 'react-native'

import HotelButton from './hotel_button'
import Row from './Row.js'
import InfoBox from './info_box'

// import actions to move between views
import { Actions } from 'react-native-router-flux'

class HotelNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'hotel-1',
    }
  }
  render() {
    const { activeButton } = this.state
    const { touchableOpacityStyle } = styles

    return (
      <View style={styles.viewStyle}>
        <Row>
          {/* { id: 'hotel-1', name: 'Eco Sky', key: 'appOne' },
              { id: 'hotel-2', name: 'Hotel Piedras', key: 'appTwo' },
              { id: 'hotel-3', name: 'Grand Hotel Bariloche' },
              { id: 'hotel-4', name: 'Hotel Nevada' },
              { id: 'hotel-5', name: 'Hotel Concorde' }, */}
          <InfoBox
            image={require('../assets/img/infoBox.jpg')}
            text="Descripción del hotel"
          >
            <TouchableOpacity
              key="Eco Sky"
              style={touchableOpacityStyle}
              onPress={() => {
                this.setState({ activeButton: 'hotel-1' })
                // let function = 'Action.' + go + '()'
                Actions.appTwo()
              }}
            >
              <HotelButton
                id="hotel-1"
                active={activeButton == 'hotel-1' ? true : null}
              >
                Eco Sky
              </HotelButton>
            </TouchableOpacity>
          </InfoBox>

          <InfoBox
            image={require('../assets/img/infoBox.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <TouchableOpacity
              key="Eco Sky"
              style={touchableOpacityStyle}
              onPress={() => {
                this.setState({ activeButton: 'hotel-1' })
                // let function = 'Action.' + go + '()'
                Actions.appTwo()
              }}
            >
              <HotelButton
                id="hotel-1"
                active={activeButton == 'hotel-1' ? true : null}
              >
                Eco Sky
              </HotelButton>
            </TouchableOpacity>
          </InfoBox>

          <InfoBox
            image={require('../assets/img/infoBox.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <TouchableOpacity
              key="Eco Sky"
              style={touchableOpacityStyle}
              onPress={() => {
                this.setState({ activeButton: 'hotel-1' })
                // let function = 'Action.' + go + '()'
                Actions.appTwo()
              }}
            >
              <HotelButton
                id="hotel-1"
                active={activeButton == 'hotel-1' ? true : null}
              >
                Eco Sky
              </HotelButton>
            </TouchableOpacity>
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
