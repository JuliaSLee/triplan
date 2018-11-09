import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, Icon, Image, Container, Header} from 'semantic-ui-react'
import {fetchSingleTrip} from '../store'

class SingleTrip extends Component {
  componentDidMount() {
    const tripId = Number(this.props.match.params.tripId)
    this.props.setSingleTrip(tripId)
  }
  render() {
    const {trip} = this.props
    console.log('this.props --->', this.props)
    console.log('trip --->', trip)
    return (
      <Container>
        <Header as="h2" dividing>
          Trip to: {trip.name}
        </Header>
      </Container>
    )
  }
}

const mapState = ({trip}) => ({trip: trip.singleTrip})

const mapDispatch = dispatch => ({
  setSingleTrip: tripId => dispatch(fetchSingleTrip(tripId))
})

export default connect(mapState, mapDispatch)(SingleTrip)
