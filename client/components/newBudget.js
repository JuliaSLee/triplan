import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Input, Button, Icon} from 'semantic-ui-react'
import {newBudget} from '../store'

class NewBudget extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      amount: 0,
      actualAmount: 0
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleClick = async e => {
    e.preventDefault()
    const tripId = 1
    const {name, amount, actualAmount} = this.state
    const singleBudget = {name, amount, actualAmount, tripId}
    try {
      await this.props.addBudget(singleBudget)
      this.setState({
        name: '',
        amount: 0,
        actualAmount: 0
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>
          <Input
            placeholder="Add a new item"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Input
            placeholder="Amount"
            value={this.state.amount}
            name="amount"
            onChange={this.handleChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Input
            placeholder="Amount"
            value={this.state.actualAmount}
            name="actualAmount"
            onChange={this.handleChange}
          />
          <Button>Save</Button>
        </Table.Cell>
        <Table.Cell>
          <Button onClick={this.handleClick}>
            <Icon name="plus" />
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

const mapDispatch = dispatch => ({
  addBudget: budget => dispatch(newBudget(budget))
})
export default connect(null, mapDispatch)(NewBudget)
