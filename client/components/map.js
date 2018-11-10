import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Card,
  Icon,
  Image,
  Container,
  Header,
  Grid,
  Menu
} from 'semantic-ui-react'
import MapContainer from './mapContainer'
import PlaceList from './placeList'
import {fetchPlaces} from '../store'

export class Map extends Component {
  componentDidMount() {
    this.props.setPlaces()
  }

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <MapContainer places={this.props.place} />
        </Grid.Column>
        <Grid.Column>
          <PlaceList places={this.props.place} />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapState = ({place}) => ({place})

const mapDispatch = dispatch => ({
  setPlaces: () => dispatch(fetchPlaces())
})

export default connect(mapState, mapDispatch)(Map)
