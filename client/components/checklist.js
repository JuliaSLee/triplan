import React from 'react'
import {connect} from 'react-redux'
import {Form} from 'semantic-ui-react'

const Checklist = props => {
  console.log('props.checklist --->', props.checklist)
  return (
    <Form>
      <Form.Group grouped>
        <label>My Checklist</label>
        {props.checklist.map(listItem => (
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

const mapState = ({checklist}) => ({checklist})

export default connect(mapState)(Checklist)
