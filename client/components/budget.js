import React from 'react'
import {connect} from 'react-redux'
import {fetchBudget} from '../store'
import LineChart from 'react-chartjs'

const chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

class Budget extends React.Component {
  componentDidMount() {
    this.props.setBudget()
  }

  render() {
    return (
      <LineChart.Line
        data={chartData}
        options={chartOptions}
        width="600"
        height="250"
      />
    )
  }
}

const mapState = ({budget}) => ({budget})

const mapDispatch = dispatch => ({
  setBudget: () => dispatch(fetchBudget())
})

export default connect(mapState, mapDispatch)(Budget)
