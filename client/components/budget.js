// import React from 'react'
// import {connect} from 'react-redux'
// import {fetchBudget} from '../store'
// import DoughnutChart from 'react-chartjs'
// import Chart from 'chart.js'

// const chartData = {
//   labels: ['match1', 'match2', 'match3', 'match4', 'match5'],
//   datasets: [
//     {
//       label: 'TeamB Score',
//       data: [20, 35, 40, 60, 50],
//       backgroundColor: ['#FAEBD7', '#DCDCDC', '#E9967A', '#F5DEB3', '#9ACD32'],
//       borderWidth: [1, 1, 1, 1, 1]
//     }
//   ]
// }

// const chartOptions = {
//   responsive: true,
//   title: {
//     display: true,
//     position: 'top',
//     text: 'Doughnut Chart',
//     fontSize: 18,
//     fontColor: '#111'
//   },
//   legend: {
//     display: true,
//     position: 'bottom',
//     labels: {
//       fontColor: '#333',
//       fontSize: 16
//     }
//   }
// }

// class Budget extends React.Component {
//   componentDidMount() {
//     this.props.setBudget()
//   }

//   render() {
//     return (
//       <canvas>
//         <DoughnutChart.Doughnut
//           data={chartData}
//           options={chartOptions}
//           width="600"
//           height="250"
//         />
//       </canvas>
//     )
//   }
// }

// const mapState = ({budget}) => ({budget})

// const mapDispatch = dispatch => ({
//   setBudget: () => dispatch(fetchBudget())
// })

// export default connect(mapState, mapDispatch)(Budget)
