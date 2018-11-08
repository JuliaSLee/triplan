import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form} from 'semantic-ui-react'
import {fetchChecklist} from '../store'

class Checklist extends Component {
  componentDidMount() {
    this.props.setChecklist()
  }
  render() {
    return (
      <Form>
        <Form.Group grouped>
          <label>My Checklist</label>

          {this.props.checklist.map(listItem => (
            <Form.Field
              key={listItem.id}
              label={listItem.name}
              control="input"
              type="checkbox"
            />
          ))}
        </Form.Group>
      </Form>
    )
  }
}

const mapState = ({checklist}) => ({checklist})

const mapDispatch = dispatch => ({
  setChecklist: () => dispatch(fetchChecklist())
})

export default connect(mapState, mapDispatch)(Checklist)
