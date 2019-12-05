import React from 'react'
import ReactYoutube from '../Youtube/ReactYoutube.js'

const Tutorials = prop => {
  const videoIds = [ 'JXYqd6ugxZw', 'H4wx8nZZ6Ek', 'qNncOv3dJTg', 'rOxlw2VMSDw', 'Sl9vRG3F5p8' ]
  const captionsArray = ['Chest Workout', 'Back Workout', 'Shoulder Workout', 'Leg Workout', 'Arm Workout']
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
