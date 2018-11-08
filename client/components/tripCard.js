import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, Icon, Image, Container, Header} from 'semantic-ui-react'

const TripCard = props => {
  const {trips} = props
  return (
    <Card>
      {/* <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" /> */}
      <Card.Content grouped>
        <Card.Header>{trips.name}</Card.Header>
        {/* <Card.Meta>
          <span className="date">
            {trip.startDate} - {trip.endDate}
          </span>
        </Card.Meta> */}
        {/* <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description> */}
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content> */}
    </Card>
  )
}

export default TripCard
