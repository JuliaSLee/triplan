import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, TextArea, Button, Icon} from 'semantic-ui-react'
import {fetchNote} from '../store'

class Note extends Component {
  async componentDidMount() {
    await this.props.setNote()
  }

  render() {
    console.log(this.props.note)
    return (
      <div>
        <Form>
          <Form.Group grouped>
            <h2>Note</h2>
            <TextArea autoHeight placeholder="your note" />
            <Button type="subtmit">Save</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const mapState = ({note}) => ({note})

const mapDispatch = dispatch => ({
  setNote: () => dispatch(fetchNote())
})

export default connect(mapState, mapDispatch)(Note)
