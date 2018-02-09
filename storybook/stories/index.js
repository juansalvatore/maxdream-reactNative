import React from 'react'
import { Text, View } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CenterView from './CenterView'
import Welcome from './Welcome'

// imports
import IndexElement from '../../src/components/index_element'
import Carousel from '../../src/components/Carousel'
import ImageBanner from '../../src/components/image_banner'
import FullImageBanner from '../../src/components/full_image_banner'
import InfoBox from '../../src/components/info_box'
import Row from '../../src/components/Row'
import Button from '../../src/components/Button'
import HotelButton from '../../src/components/hotel_button'
import SquareButton from '../../src/components/square_button'
import Card from '../../src/components/Card'

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with Image', () => (
    <View>
      <Card />
    </View>
  ))

storiesOf('Maxdream', module).add('documentación UI', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Banner', module)
  .add('image banner', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <ImageBanner image={require('../../src/assets/img/bannerImage.jpg')} />
    </View>
  ))
  .add('image banner left text', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <ImageBanner
        image={require('../../src/assets/img/bannerImage.jpg')}
        titleLeft="Title"
        paragraphLeft="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
    </View>
  ))
  .add('image banner right text', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <ImageBanner
        image={require('../../src/assets/img/bannerImage.jpg')}
        titleRight="Title"
        paragraphRight="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
    </View>
  ))
  .add('carousel', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <Carousel
        items={[
          {
            key: 'page0',
            image: require('../../src/assets/img/bannerImage.jpg'),
          },
          {
            key: 'page2',
            image: require('../../src/assets/img/bannerImage.jpg'),
          },
          {
            key: 'page3',
            image: require('../../src/assets/img/bannerImage.jpg'),
          },
        ]}
      />
    </View>
  ))
  .add('full image banner', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <FullImageBanner
        image={require('../../src/assets/img/bannerImage.jpg')}
      />
    </View>
  ))
  .add('full image banner title', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <FullImageBanner
        image={require('../../src/assets/img/bannerImage.jpg')}
        title="Main Title"
      />
    </View>
  ))
  .add('full image banner title + paragraph', () => (
    <View>
      <View style={{ marginTop: 250 }} />
      <FullImageBanner
        image={require('../../src/assets/img/bannerImage.jpg')}
        title="Main Title"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
    </View>
  ))

storiesOf('Index', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('index element', () => <IndexElement />)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('button', () => (
    <Button onPress={action('clicked-text')}>
      <Text>BUTTON TEXT</Text>
    </Button>
  ))
  .add('square button', () => (
    <SquareButton onPress={action('clicked-text')}>
      <Text>BUTTON TEXT</Text>
    </SquareButton>
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
