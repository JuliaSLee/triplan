import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Doughnut} from 'react-chartjs-2'
import {fetchBudget} from '../store'
import {Table, Input, Button, Icon, Segment} from 'semantic-ui-react'
import SingleBudget from './singleBudget'
import NewBudget from './newBudget'
import Chart from './chart.js'

class Budget extends Component {
  componentDidMount() {
    this.props.setBudget()
  }

  render() {
    const {budget} = this.props

    let totalBudgetAmount = 0
    const totalBudget = budget.map(item => {
      totalBudgetAmount += item.amount
      return totalBudgetAmount
    })
    let totalActualAmount = 0
    const totalActual = budget.map(item => {
      totalActualAmount += item.actualAmount
      return totalActualAmount
    })

    return (
      <Segment>
        <h2>Budget vs. Actual</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Budget</Table.HeaderCell>
              <Table.HeaderCell>Actual</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {budget.map(item => <SingleBudget key={item.id} item={item} />)}
            <NewBudget />
            <Table.Row>
              <Table.Cell>Total</Table.Cell>
              <Table.Cell>{totalBudgetAmount}</Table.Cell>
              <Table.Cell>{totalActualAmount}</Table.Cell>
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
        <Chart {...this.props} />
      </Segment>
    )
  }
}

const mapState = ({budget}) => ({budget})

const mapDispatch = dispatch => ({
  setBudget: () => dispatch(fetchBudget())
})

export default connect(mapState, mapDispatch)(Budget)
