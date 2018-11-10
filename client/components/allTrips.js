import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, Icon, Image, Container, Header} from 'semantic-ui-react'
import {fetchTrips} from '../store'
import TripCard from './tripCard'

export class AllTrips extends Component {
  componentDidMount() {
    this.props.setTrips()
  }
  render() {
    return (
      <Container>
        <Header as="h2" dividing>
          My Trips
        </Header>
        {this.props.trip.map(singleTrip => (
          <TripCard key={singleTrip.id} singleTrip={singleTrip} />
        ))}
      </Container>
    )
  }
}

const mapState = ({trip}) => ({trip: trip.allTrips})

const mapDispatch = dispatch => ({
  setTrips: () => dispatch(fetchTrips())
})

export default connect(mapState, mapDispatch)(AllTrips)
