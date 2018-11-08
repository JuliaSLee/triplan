import React from 'react'
// const {Map: LeafletMap, TileLayer, Marker, Popup} = ReactLeaflet
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

class VisualMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 41.880614,
      lng: -87.624507,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default VisualMap
// ReactDOM.render(<VisualMap />, document.getElementById('app'))
