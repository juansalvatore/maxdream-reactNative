import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, TouchableOpacity } from 'react-native'

import HotelButton from './hotel_button'
import Row from './Row.js'

// import actions to move between views
import { Actions } from 'react-native-router-flux'

class HotelNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeButton: 'hotel-1',
    }
  }

  renderHotelList = () => {
    const { activeButton } = this.state
    const { touchableOpacityStyle } = styles
    const intitialHotelArray = this.props.hotels

    return (hotelsList = intitialHotelArray.map(hotel => (
      <TouchableOpacity
        key={hotel.name}
        style={touchableOpacityStyle}
        onPress={() => {
          this.setState({ activeButton: hotel.id })
          // let function = 'Action.' + go + '()'
          Actions.HotelsIndex()
        }}
      >
        <HotelButton
          id="hotel-1"
          active={activeButton == hotel.id ? true : null}
        >
          {hotel.name}
        </HotelButton>
      </TouchableOpacity>
    )))
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Row>{this.renderHotelList()}</Row>
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
