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
import Card from './components/Card'
import Carousel from './components/Carousel'
import SquareButton from './components/square_button'
import ButtonIcon from './components/Button_icon'
import CircleIcon from './components/CircleIcon'
import RoundedCard from './components/RoundedCard'
import SearchTitle from './components/SearchTitle'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

const HotelOne = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* top bar color and style */}
        <StatusBar
          backgroundColor="rgba(11,92,148,0.8)"
          barStyle="light-content"
        />

        <SearchTitle>
          ¿POR QUÉ ES TAN IMPORTANTE QUE TENGAS TU USUARIO?
        </SearchTitle>

        <Row>
          <CircleIcon>
            <Icon name="bus" size={70} color="white" />
          </CircleIcon>
          <CircleIcon>
            <Icon name="tree" size={70} color="white" />
          </CircleIcon>
          <CircleIcon>
            <Icon name="leaf" size={70} color="white" />
          </CircleIcon>
          <CircleIcon>
            <Icon name="film" size={70} color="white" />
          </CircleIcon>
        </Row>

        {/* button icon  */}
        <ButtonIcon left={<Icon name="plane" size={23} color="white" />}>
          TRANSPORTE HIGH CLASS
        </ButtonIcon>

        <ButtonIcon left="1">TRANSPORTE HIGH CLASS</ButtonIcon>

        <ButtonIcon
          left="2"
          right={<Icon name="plane" size={28} color="white" />}
        >
          TRANSPORTE HIGH CLASS
        </ButtonIcon>

        <ButtonIcon>TRANSPORTE HIGH CLASS</ButtonIcon>

        <Row>
          <RoundedCard icon={<Icon name="leaf" size={70} color="white" />}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit.
          </RoundedCard>
          <RoundedCard>Párrafo sólo texto</RoundedCard>
        </Row>

        <Card
          image={require('./assets/img/bannerImage.jpg')}
          title="Title"
          paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        >
          <SquareButton onPress={Actions.HotelOne()}>BUTTON TEXT</SquareButton>
        </Card>

        <Carousel
          items={[
            {
              key: 'page0',
              image: require('./assets/img/bannerImage.jpg'),
            },
            {
              key: 'page2',
              image: require('./assets/img/bannerImage.jpg'),
            },
            {
              key: 'page3',
              image: require('./assets/img/bannerImage.jpg'),
            },
          ]}
        />

        {/* info sections with three or two info boxes */}
        <Row>
          <InfoBox
            image={require('./assets/img/infoBox.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <InfoBox
            image={require('./assets/img/infoBox.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          />
          <InfoBox
            image={require('./assets/img/infoBox.jpg')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
          />
        </Row>

        <ImageBanner image={require('./assets/img/bannerImage.jpg')} />
        {/* hotel + services */}
        <Row>
          <Hotel image={require('./assets/img/bannerImage.jpg')} />
          <Services image={require('./assets/img/bannerImage.jpg')} />
        </Row>

        {/* images banners */}
        <ImageBanner image={require('./assets/img/bannerImage.jpg')} />
        <ImageBanner image={require('./assets/img/bannerImage.jpg')} />
        <ImageBanner image={require('./assets/img/bannerImage.jpg')} />
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
export default HotelOne
