import React, {Component} from 'react'
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react'
import SearchBar from './searchBar'

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

  fetchPlaces(mapProps, map) {
    const {google} = mapProps
    const service = new google.maps.places.PlacesService(map)
  }

  render() {
    const {places, clickedItem} = this.props
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    let clickedPlace

    if (clickedItem) {
      clickedPlace = places.filter(place => place.id === Number(clickedItem))[0]
    }
    return (
      <div>
        <SearchBar />
        <Map
          google={this.props.google}
          onReady={this.fetchPlaces}
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
              address={pinPlace.address}
              position={{lat: pinPlace.location[0], lng: pinPlace.location[1]}}
            />
          ))}
          {clickedPlace && (
            <Marker
              key={clickedPlace.id}
              onClick={this.onMarkerClick}
              name={clickedPlace.name}
              position={{
                lat: clickedPlace.location[0],
                lng: clickedPlace.location[1]
              }}
              address={clickedPlace.address}
              icon="/image/minion.png"
            />
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h5>{this.state.selectedPlace.address}</h5>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

const mapWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyA6mfR91XoO4QFT5pBmB0MVyM34NJM6efk'
})(MapContainer)

export default mapWrapper

// export default connect(mapState, mapDispatch)(mapWrapper)
