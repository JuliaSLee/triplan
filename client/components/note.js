import React from 'react'
import {Form, TextArea} from 'semantic-ui-react'

const Note = () => (
  <Form>
    <Form.Group grouped>
      <h2>Note</h2>
      <TextArea autoHeight placeholder="your note" />
    </Form.Group>
  </Form>
)

export default Note
