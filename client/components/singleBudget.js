import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Input, Button, Icon} from 'semantic-ui-react'
import {editActualAmount, deleteBudget} from '../store'

class SingleBudget extends Component {
  constructor() {
    super()
    this.state = {actualAmount: 0}
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleClick = e => {
    e.preventDefault()
    const id = Number(this.props.item.id)
    if (e.target.name === 'save') {
      return this.props.editAmount(id, this.state.actualAmount)
    } else {
      return this.props.removeBudget(id)
    }
  }

  render() {
    const {item} = this.props

    return (
      <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.amount}</Table.Cell>
        {item.actualAmount ? (
          <Table.Cell>{item.actualAmount}</Table.Cell>
        ) : (
          <Table.Cell>
            <Input
              value={this.state.actualAmount}
              id={item.id}
              name="actualAmount"
              placeholder="Amount"
              onChange={this.handleChange}
            />
            <Button name="save" onClick={this.handleClick}>
              Save
            </Button>
          </Table.Cell>
        )}
        <Table.Cell>
          <Button name="delete" onClick={this.handleClick}>
            <Icon name="minus" />
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

const mapDispatch = dispatch => ({
  editAmount: (id, actualAmount) =>
    dispatch(editActualAmount(id, actualAmount)),
  removeBudget: budget => dispatch(deleteBudget(budget))
})

export default connect(null, mapDispatch)(SingleBudget)
