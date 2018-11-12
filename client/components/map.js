import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Icon, List, Button, Header, Grid, Input} from 'semantic-ui-react'
import MapContainer from './mapContainer'
import {fetchPlaces} from '../store'

export class Map extends Component {
  constructor() {
    super()
    this.state = {
      places: [],
      clickedItem: 0
    }
  }

  componentDidMount() {
    this.props.setPlaces()
    this.setState({
      places: this.props.place
    })
  }

  handleClick = e => {
    if (e.target.name === 'allPlaces') {
      this.setState({
        places: this.props.place,
        clickedItem: 0
      })
    } else if (e.target.name === 'placesByDay1') {
      const filteredPlaces = this.props.place.filter(
        onePlace =>
          onePlace.trips[0].tripplace.date === onePlace.trips[0].startDate
      )
      this.setState({
        places: filteredPlaces,
        clickedItem: 0
      })
    } else if (e.target.name === 'placesByDay2') {
      const filteredPlaces = this.props.place.filter(
        onePlace =>
          onePlace.trips[0].tripplace.date === onePlace.trips[0].endDate
      )
      this.setState({
        places: filteredPlaces,
        clickedItem: 0
      })
    } else if (e.target.name === 'clickedItem') {
      this.setState({
        clickedItem: e.target.id
      })
    }
  }

  render() {
    return (
      <Grid relaxed>
        <Grid.Row>
          <Grid.Column width={13}>
            <MapContainer
              places={this.state.places}
              clickedItem={this.state.clickedItem}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <List>
              <Button href="#" name="allPlaces" onClick={this.handleClick}>
                Show All
              </Button>
              <Header>
                <a href="#" name="placesByDay1" onClick={this.handleClick}>
                  Day 1
                </a>
              </Header>
              {this.props.place.map(pinPlace => {
                if (
                  pinPlace.trips[0].startDate ===
                  pinPlace.trips[0].tripplace.date
                ) {
                  return (
                    <div key={pinPlace.id}>
                      <List.Item>
                        <List.Content>
                          <List.Header>
                            <a
                              href="#"
                              name="clickedItem"
                              id={pinPlace.id}
                              onClick={this.handleClick}
                            >
                              <List.Icon name="marker" />
                              {pinPlace.name}
                            </a>
                          </List.Header>
                          <List.Description />
                        </List.Content>
                      </List.Item>
                    </div>
                  )
                }
              })}
              <List.Item>
                <Input placeholder="Search" />
                <Button>
                  <Icon name="plus" />
                  Add
                </Button>
              </List.Item>

              <Header>
                <a href="#" name="placesByDay2" onClick={this.handleClick}>
                  Day 2
                </a>
              </Header>
              {this.props.place.map(pinPlace => {
                if (
                  pinPlace.trips[0].endDate === pinPlace.trips[0].tripplace.date
                ) {
                  return (
                    <div key={pinPlace.id}>
                      <List.Item>
                        <List.Content>
                          <List.Header>
                            <a
                              href="#"
                              name="clickedItem"
                              id={pinPlace.id}
                              onClick={this.handleClick}
                            >
                              <List.Icon name="marker" />
                              {pinPlace.name}
                            </a>
                          </List.Header>
                          <List.Description />
                        </List.Content>
                      </List.Item>
                    </div>
                  )
                }
              })}
              <List.Item>
                <Input placeholder="Search" />
                <Button>
                  <Icon name="plus" />
                  Add
                </Button>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapState = ({place}) => ({place})

const mapDispatch = dispatch => ({
  setPlaces: () => dispatch(fetchPlaces())
})

export default connect(mapState, mapDispatch)(Map)
