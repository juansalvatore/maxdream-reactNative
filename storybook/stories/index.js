import React from 'react'
import { Text, View } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CenterView from './CenterView'
import Welcome from './Welcome'

// imports
import Carousel from '../../src/components/Carousel'
import ImageBanner from '../../src/components/image_banner'
import FullImageBanner from '../../src/components/full_image_banner'
import InfoBox from '../../src/components/info_box'
import Row from '../../src/components/Row'
import Button from '../../src/components/Button'
import HotelButton from '../../src/components/hotel_button'
import SquareButton from '../../src/components/square_button'

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('simple round button', () => (
    <Button onPress={action('clicked-text')}>
      <Text>BUTTON TEXT</Text>
    </Button>
  ))
  .add('simple square button', () => (
    <SquareButton onPress={action('clicked-text')}>
      <Text>BUTTON TEXT</Text>
    </SquareButton>
  ))

storiesOf('Banner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('full image banner', () => (
    <FullImageBanner image={require('../../src/assets/img/bannerImage.jpg')} />
  ))
  .add('image banner', () => (
    <ImageBanner image={require('../../src/assets/img/bannerImage.jpg')} />
  ))

storiesOf('Maxdream', module).add('documentación UI', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Info', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Info Box', () => (
    <Row>
      <InfoBox
        image={require('../../src/assets/img/bannerImage.jpg')}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
      />
      <InfoBox
        image={require('../../src/assets/img/bannerImage.jpg')}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
      />
    </Row>
  ))
  .add('Info Box button', () => (
    <Row>
      <InfoBox
        image={require('../../src/assets/img/bannerImage.jpg')}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
      >
        <Button onPress={action('clicked-text')}>
          <Text>BUTTON TEXT</Text>
        </Button>
      </InfoBox>
      <InfoBox
        image={require('../../src/assets/img/bannerImage.jpg')}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
      >
        <HotelButton id="hotel-1">Eco Sky</HotelButton>
      </InfoBox>
    </Row>
  ))
