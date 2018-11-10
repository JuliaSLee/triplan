import React from 'react'
import {Form, TextArea, Button, Icon} from 'semantic-ui-react'

const Note = props => (
  <Form>
    <Form.Group grouped>
      <h2>Note</h2>
      <TextArea autoHeight placeholder="your note" />
      <Button type="subtmit">Save</Button>
    </Form.Group>
  </Form>
)

export default Note
