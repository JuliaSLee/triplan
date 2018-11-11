import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Doughnut} from 'react-chartjs-2'
import {fetchBudget} from '../store'

class Budget extends Component {
  componentDidMount() {
    this.props.setBudget()
  }

  render() {
    console.log('Budget', this.props.budget)
    const data = {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    }
    return (
      <div>
        <h2>Budget vs. Actual</h2>
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
