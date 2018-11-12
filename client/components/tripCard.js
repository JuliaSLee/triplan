import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, Grid, Image, Container, Header} from 'semantic-ui-react'

const TripCard = props => {
  const {singleTrip} = props
  return (
    <Grid.Column>
      <Card>
        <Link to={`/trips/${singleTrip.id}`}>
          <Image src={singleTrip.image} />
        </Link>
        <Card.Content>
          <Card.Header>{singleTrip.name}</Card.Header>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default TripCard
