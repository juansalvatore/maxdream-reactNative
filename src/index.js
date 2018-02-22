// importing react and react native
import React, { Component } from 'react'
import { Text, View, AppRegistry, ScrollView, StatusBar } from 'react-native'

// components
import Icon from 'react-native-vector-icons/FontAwesome'
import DynamicHotelNavigation from './components/hotel_navigation_dynamic'
import Row from './components/Row.js'
import Column from './components/Column.js'
import IndexElement from './components/index_element.js'
import { Actions } from 'react-native-router-flux'

const Index = () => {
  return (
    <Row>
      {/* top bar color and style */}
      <StatusBar
        backgroundColor="rgba(11,92,148,0.8)"
        barStyle="light-content"
      />
      <Column>
        <IndexElement
          action={() => Actions.HotelsIndex()}
          icon={<Icon name="bus" size={28} color="black" />}
        >
          <Text>1 - Lorem Ipsum lorem</Text>
          <Text>2 - Lorem Ipsum lorem</Text>
          <Text>3 - Lorem Ipsum lorem</Text>
          <Text>4 - Lorem Ipsum lorem</Text>
        </IndexElement>
        <IndexElement
          action={() => Actions.Index()}
          icon={<Icon name="plane" size={28} color="black" />}
        >
          <Text>1 - Lorem Ipsum lorem</Text>
          <Text>2 - Lorem Ipsum lorem</Text>
          <Text>3 - Lorem Ipsum lorem</Text>
          <Text>4 - Lorem Ipsum lorem</Text>
        </IndexElement>
      </Column>

      <Column>
        <IndexElement
          action={() => Actions.HotelsIndex()}
          icon={<Icon name="bus" size={28} color="black" />}
        >
          <Text>1 - Lorem Ipsum lorem</Text>
          <Text>2 - Lorem Ipsum lorem</Text>
          <Text>3 - Lorem Ipsum lorem</Text>
          <Text>4 - Lorem Ipsum lorem</Text>
        </IndexElement>
        <IndexElement
          action={() => Actions.Index()}
          icon={<Icon name="leaf" size={28} color="black" />}
        >
          <Text>1 - Lorem Ipsum lorem</Text>
          <Text>2 - Lorem Ipsum lorem</Text>
          <Text>3 - Lorem Ipsum lorem</Text>
          <Text>4 - Lorem Ipsum lorem</Text>
        </IndexElement>
      </Column>
    </Row>
  )
}

const styles = {
  contentContainer: {
    paddingVertical: 20,
  },
}

// register app
export default Index
