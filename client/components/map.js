import React from 'react'
import {connect} from 'react-redux'
import {fetchPlaces} from '../store'
// const {Map: LeafletMap, TileLayer, Marker, Popup} = ReactLeaflet
import {List} from 'semantic-ui-react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import SavedPin from './savedPin'
import PlaceList from './placeList'

class VisualMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 41.875953,
      lng: -87.624265,
      zoom: 13
    }
  }
  componentDidMount() {
    this.props.setPlaces()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {this.props.place.map(pin => <SavedPin key={pin.id} pin={pin} />)}
        </Map>
        <List>
          {this.props.place.map(pin => <PlaceList key={pin.id} pin={pin} />)}
        </List>
      </div>
    )
  }
}

const mapState = ({place}) => ({place})

const mapDispatch = dispatch => ({
  setPlaces: () => dispatch(fetchPlaces())
})

export default connect(mapState, mapDispatch)(VisualMap)
// ReactDOM.render(<VisualMap />, document.getElementById('app'))
