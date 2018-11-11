import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs-2'
import {fetchBudget} from '../store'
import {Table, Input, Button, Icon} from 'semantic-ui-react'
import SingleBudget from './singleBudget'
import NewBudget from './newBudget'

class Budget extends Component {
  componentDidMount() {
    this.props.setBudget()
  }

  render() {
    const {budget} = this.props
    console.log('Budget', budget)
    let totalBudgetAmount = 0
    const totalBudget = budget.map(item => {
      totalBudgetAmount += item.amount
      return totalBudgetAmount
    })

    const data = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ],
      option: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    }

    return (
      <div>
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
              <Table.Cell />
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
        <Doughnut data={data} />
      </div>
    )
  }
}

const mapState = ({budget}) => ({budget})

const mapDispatch = dispatch => ({
  setBudget: () => dispatch(fetchBudget())
})

export default connect(mapState, mapDispatch)(Budget)
