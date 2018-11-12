import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Icon, Grid, Button} from 'semantic-ui-react'
import {fetchTrips} from '../store'
import TripCard from './tripCard'

export class AllTrips extends Component {
  componentDidMount() {
    this.props.setTrips()
  }
  render() {
    return (
      <div>
        <Button>
          <Icon name="plane" />
          Add a New Trip
        </Button>
        <Grid columns={4}>
          <Grid.Row>
            {this.props.trip.map(singleTrip => (
              <TripCard key={singleTrip.id} singleTrip={singleTrip} />
            ))}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapState = ({trip}) => ({trip: trip.allTrips})

const mapDispatch = dispatch => ({
  setTrips: () => dispatch(fetchTrips())
})

export default connect(mapState, mapDispatch)(AllTrips)
