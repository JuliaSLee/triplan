import React, {Component} from 'react'
import {Form, Input, Icon} from 'semantic-ui-react'
import {postChecklist} from '../store'
import {connect} from 'react-redux'

export class ChecklistForm extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  handleChange = evt => this.setState({[evt.target.name]: evt.target.value})

  handleSubmit = evt => {
    evt.preventDefault()
    const {name} = this.state
    this.props.postChecklist({name})
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} size="big">
        <Form.Group>
          <Form.Field
            control={Input}
            placeholder="Add a new list item"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color="teal">
          <Icon name="add" />
          Add Item
        </Form.Button>
      </Form>
    )
  }
}

const mapState = ({checklist}) => ({checklist})

const mapDispatch = {postChecklist}

export default connect(mapState, mapDispatch)(ChecklistForm)
