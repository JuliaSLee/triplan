import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Image, Menu, Container, Header} from 'semantic-ui-react'
import {fetchTrips} from '../store'
import MenuBar from './menuBar'
import Note from './note'
import Budget from './budget'
import Checklist from './checklist'
// import SidebarExampleVisible from './sideBar'

export class SingleTrip extends Component {
  componentDidMount() {
    // const tripId = Number(this.props.match.params.tripId)
    // console.log('===>tripId', tripId)
    this.props.setTrips()
  }
  render() {
    const tripId = Number(this.props.match.params.tripId)
    const trip = this.props.trip[tripId - 1]
    return <MenuBar />
  }
}

const mapState = ({trip}) => ({trip: trip.allTrips})

const mapDispatch = dispatch => ({
  setTrips: () => dispatch(fetchTrips())
})

export default connect(mapState, mapDispatch)(SingleTrip)

// state에서 singleTrip fetch하는게 안되서 allTrips array에서 찾음. 고치기!!
