import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Segment, Button} from 'semantic-ui-react'
import {fetchChecklist, deleteChecklist} from '../store'
import ChecklistForm from './checklistForm'

class Checklist extends Component {
  componentDidMount() {
    this.props.setChecklist()
  }
  render() {
    return (
      <Form>
        <Form.Group grouped>
          <h2>My Checklist</h2>
          <ChecklistForm />
          {this.props.checklist.map(listItem => (
            <Segment key={listItem.id}>
              <Form.Field
                label={listItem.name}
                control="input"
                type="checkbox"
              />
              <Button
                type="submit"
                onClick={() => {
                  this.props.removechecklist(listItem.id)
                }}
              >
                Delete
              </Button>
            </Segment>
          ))}
        </Form.Group>
      </Form>
    )
  }
}

const mapState = ({checklist}) => ({checklist})

const mapDispatch = dispatch => ({
  setChecklist: () => dispatch(fetchChecklist()),
  removechecklist: listItemId => dispatch(deleteChecklist(listItemId))
})

export default connect(mapState, mapDispatch)(Checklist)
