import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Image, Menu, Container, Header} from 'semantic-ui-react'
import {fetchTrips} from '../store'

export default class MenuBar extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item as="h2">Trip to: Chicago, July 2019</Menu.Item>
          <Menu.Item>
            <Link to="/map">Map</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/budget">Budget</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/note">Note</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/checklist">Checklist</Link>
          </Menu.Item>
        </Menu>
        <Image src="/image/chicago.jpg" size="massive" className="center" />
      </div>
    )
  }
}
