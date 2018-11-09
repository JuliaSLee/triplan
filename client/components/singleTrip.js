import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, Icon, Image, Container, Header} from 'semantic-ui-react'
import {fetchSingleTrip} from '../store'
import VisualMap from './map'
import Note from './note'
import Checklist from './checklist'

class SingleTrip extends Component {
  componentDidMount() {
    const tripId = Number(this.props.match.params.tripId)
    console.log('===>tripId', tripId)
    this.props.setTrip(tripId)
  }
  render() {
    const {trip} = this.props
    console.log('===>trip', trip)
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

const mapState = ({trip}) => ({trip: trip.singleTrip})

const mapDispatch = dispatch => ({
  setTrip: tripId => dispatch(fetchSingleTrip(tripId))
})

export default connect(mapState, mapDispatch)(SingleTrip)
