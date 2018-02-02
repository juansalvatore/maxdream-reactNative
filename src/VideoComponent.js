// importing react and react native
import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import VideoPlayer from 'react-native-video-controls'

class VideoComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(11,92,148,0.8)"
          barStyle="light-content"
        />
        <VideoPlayer
          source={require('./videos/clase-ski.mp4')}
          navigator={this.props.navigator}
          // paused={true}
          repeat={true}
          muted={true} // Mutes the audio entirely.
          disableBack={true} // Used to hide the Back control.
          disableFullscreen={true} // Used to hide the Fullscreen control.
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    height: 300,
  },
}

// register app
export default VideoComponent
