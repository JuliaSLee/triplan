import React from 'react'
import {Marker, Popup} from 'react-leaflet'

const SavedPin = props => {
  const pin = props.pin
  return (
    <Marker key={pin.id} position={pin.location}>
      <Popup>
        {pin.name} <br /> address: {pin.address}
      </Popup>
    </Marker>
  )
}

export default SavedPin
