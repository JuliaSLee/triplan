import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Header} from 'semantic-ui-react'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="title">
    {isLoggedIn ? (
      <div className="nav">
        <Menu pointing secondary>
          <Menu.Item name="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item name="trips">
            <Link to="/trips">My Trips</Link>
          </Menu.Item>
          <Menu.Item>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </Menu.Item>
        </Menu>
        <Header
          as="h1"
          content="Triplan"
          inverted
          textAlign="center"
          style={{
            fontSize: '6em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '0.3em'
          }}
        />
      </div>
    ) : (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
