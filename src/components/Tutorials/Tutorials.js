import React from 'react'
import ReactYoutube from '../Youtube/ReactYoutube.js'

const Tutorials = prop => {
  const videoIds = [ 'JXYqd6ugxZw', 'H4wx8nZZ6Ek', 'qNncOv3dJTg' ]
  const captionsArray = ['caption1', 'caption2', 'caption3']
  const youtubeJsx = videoIds.map((id, index) => (
    <ReactYoutube
      videoId={id}
      key={id}
      caption={captionsArray[index]}
    />
  ))
  return (
    <div className="row d-flex flex-row justify-content-center">
      {youtubeJsx}
    </div>
  )
}

export default Tutorials
