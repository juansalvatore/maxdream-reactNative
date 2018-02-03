import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'
import CarouselPager from 'react-native-carousel-pager'

class Carousel extends Component {
  onClickSomething() {
    this.carousel.goToPage(2)
  }

  render() {
    const { boxStyle } = styles

    return (
      <View style={{ flex: 1 }}>
        <CarouselPager
          ref={ref => (this.carousel = ref)}
          initialPage={0}
          pageStyle={{ backgroundColor: '#fff' }}
          animationDuration={300}
          pageSpacing={10}
          containerPadding={30} // se puede usar para hacer el carousel mas chico y que sirva tanto como banner o como info_box
        >
          <View style={boxStyle} key={'page0'}>
            <Image
              style={{ flex: 1 }}
              source={require('../assets/img/bannerImage.jpg')}
            />
          </View>
          <View style={boxStyle} key={'page1'}>
            <Image
              style={{ flex: 1 }}
              source={require('../assets/img/bannerImage.jpg')}
            />
          </View>
          <View style={boxStyle} key={'page2'}>
            <Image
              style={{ flex: 1 }}
              source={require('../assets/img/bannerImage.jpg')}
            />
          </View>
          <View style={boxStyle} key={'page2'}>
            <Image
              style={{ flex: 1 }}
              source={require('../assets/img/bannerImage.jpg')}
            />
          </View>
        </CarouselPager>
      </View>
    )
  }
}

const styles = {
  boxStyle: {
    backgroundColor: '#ccc',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: 'white',
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}

export default Carousel
