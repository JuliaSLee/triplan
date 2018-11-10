import React, {Component} from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'

const mapStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: []
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  onClick = (t, map, coord) => {
    const {latLng} = coord
    const lat = latLng.lat()
    const lng = latLng.lng()
    console.log('on Click method???', latLng)
    console.log('lat', lat)
    console.log('lng', lng)
    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: '',
            name: '',
            position: {lat, lng}
          }
        ]
      }
    })
  }

  render() {
    const {places} = this.props

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 41.878304,
          lng: -87.624322
        }}
        onClick={this.onClick}
      >
        {places.map(pinPlace => (
          <Marker
            key={pinPlace.id}
            onClick={this.onMarkerClick}
            name={pinPlace.name}
            position={{lat: pinPlace.location[0], lng: pinPlace.location[1]}}
          />
        ))}
        <Marker
          position={{lat: 41.87, lng: -87.62}}
          onClick={this.onMarkerClick}
          name="2nd"
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

const mapWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyA6mfR91XoO4QFT5pBmB0MVyM34NJM6efk'
})(MapContainer)

export default mapWrapper

// export default connect(mapState, mapDispatch)(mapWrapper)
