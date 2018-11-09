import React from 'react'
import {Marker, Popup} from 'react-leaflet'
import {List} from 'semantic-ui-react'

const PlaceList = props => {
  const pin = props.pin
  return <List.Item>{pin.name}</List.Item>
}

export default PlaceList
