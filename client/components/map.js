import React, {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

const mapStyles = {
  width: '90%',
  height: '90%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 41.878304,
          lng: -87.624322
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6mfR91XoO4QFT5pBmB0MVyM34NJM6efk'
})(MapContainer)
