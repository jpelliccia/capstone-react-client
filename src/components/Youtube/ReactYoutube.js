import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactYouTube extends Component {
  videoOnReady (event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    const { videoId } = this.props
    return (
      <div className="col-10 d-flex flex-row justify-content-center mt-5">
        <div>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this.videoOnReady}
          />
          <p>{this.props.caption}</p>
        </div>
      </div>
    )
  }
}

export default ReactYouTube
