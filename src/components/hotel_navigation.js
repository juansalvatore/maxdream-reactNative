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

  renderHotelButtons = (touchableOpacityStyle, activeButton) => {
    return (
      <Row>
        <TouchableOpacity
          style={touchableOpacityStyle}
          onPress={() => {
            this.setState({ activeButton: 'hotel-1' })
          }}
        >
          <HotelButton
            id="hotel-1"
            active={activeButton == 'hotel-1' ? true : null}
          >
            {this.props.hotels.name}
          </HotelButton>
        </TouchableOpacity>

        <TouchableOpacity
          style={touchableOpacityStyle}
          onPress={() => {
            this.setState({ activeButton: 'hotel-2' })
          }}
        >
          <HotelButton
            style={touchableOpacityStyle}
            id="hotel-2"
            active={activeButton == 'hotel-2' ? true : null}
          >
            Hotel 2
          </HotelButton>
        </TouchableOpacity>

        <TouchableOpacity
          style={touchableOpacityStyle}
          onPress={() => {
            this.setState({ activeButton: 'hotel-3' })
          }}
        >
          <HotelButton
            id="hotel-3"
            active={activeButton == 'hotel-3' ? true : null}
          >
            Hotel 3
          </HotelButton>
        </TouchableOpacity>

        <TouchableOpacity
          style={touchableOpacityStyle}
          onPress={() => {
            this.setState({ activeButton: 'hotel-4' })
          }}
        >
          <HotelButton
            id="hotel-4"
            active={activeButton == 'hotel-4' ? true : null}
          >
            Hotel 4
          </HotelButton>
        </TouchableOpacity>
      </Row>
    )
  }

  render() {
    const { activeButton } = this.state
    const { touchableOpacityStyle } = styles

    return (
      <View>
        {this.renderHotelButtons(touchableOpacityStyle, activeButton)}
      </View>
    )
  }
}

const styles = {
  touchableOpacityStyle: {
    flex: 1,
  },
}
export default HotelNavigation
