import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, Icon, Image, Container, Header} from 'semantic-ui-react'
import {fetchTrips} from '../store'
import VisualMap from './map'
import Note from './note'
import Checklist from './checklist'

export class SingleTrip extends Component {
  componentDidMount() {
    // const tripId = Number(this.props.match.params.tripId)
    // console.log('===>tripId', tripId)
    this.props.setTrips()
  }
  render() {
    const tripId = Number(this.props.match.params.tripId)
    const trip = this.props.trip[tripId - 1]
    return (
      <Container>
        <Header as="h2" dividing>
          Trip to: {trip.name}
        </Header>
        <Link to="/map" onClick={() => <VisualMap />}>
          Map
        </Link>
        <br />
        <Link to="/budget">Budget</Link>
        <br />
        <Link to="/note" onClick={() => <Note />}>
          Note
        </Link>
        <br />
        <Link to="/checklist" onClick={() => <Checklist />}>
          Checklist
        </Link>
      </Container>
    )
  }
}

const mapState = ({trip}) => ({trip: trip.allTrips})

const mapDispatch = dispatch => ({
  setTrips: () => dispatch(fetchTrips())
})

export default connect(mapState, mapDispatch)(SingleTrip)

// state에서 singleTrip fetch하는게 안되서 allTrips array에서 찾음. 고치기!!
