import React, { Component } from 'react'
import { View, AppRegistry, ScrollView, TouchableOpacity } from 'react-native'

import HotelButton from './hotel_button'
import Row from './Row.js'

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
    return <Row>{this.renderHotelList()}</Row>
  }
}

const styles = {
  touchableOpacityStyle: {
    flex: 1,
  },
}
export default HotelNavigation
