import React, {Component} from 'react'
// import {Doughnut} from 'react-chartjs-2'

// import {Doughnut, Bar} from 'react-chartjs-2'
// import 'chartjs-plugin-annotation'

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45]
//     }
//   ]
// }

// class Budget extends React.Component {
//   componentDidMount() {
//     this.props.setBudget()
//     console.log(this.refs.chart.chartInstance) // returns a Chart.js instance reference
//   }

//   render() {
//     return (
//       <canvas>
//         <Doughnut
//           ref="chart"
//           data={data}
//           width={100}
//           height={50}
//           options={{
//             maintainAspectRatio: false
//           }}
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

// class Budget extends React.Component {
//   render() {
//     const options = {
//       annotation: {
//         annotations: [
//           {
//             drawTime: 'afterDatasetsDraw',
//             borderColor: 'red',
//             borderDash: [2, 2],
//             borderWidth: 2,
//             mode: 'vertical',
//             type: 'line',
//             value: 10,
//             scaleID: 'x-axis-0'
//           }
//         ]
//       },
//       maintainAspectRation: false
//     }
//     return <Bar data={data} width={100} height={50} options={options} />
//   }
// }
// export default Budget

// import {Doughnut} from 'react-chartjs-2'

// export default class Budget extends Component {
//   render() {
//     const data = {
//       labels: ['Red', 'Green', 'Yellow'],
//       datasets: [
//         {
//           data: [300, 50, 100],
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//           hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//         }
//       ]
//     }
//     return (
//       <div>
//         <h2>Doughnut Example</h2>
//         <Doughnut data={data} />
//       </div>
//     )
//   }
// }

import {Pie} from 'react-chartjs-2'

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

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }
  }
}

export default class Budget extends React.Component {
  render() {
    console.log('is this working???')
    return (
      <div
        style={{
          height: '500px',
          width: '500px',
          backgroundColor: 'black',
          position: 'relative'
        }}
      >
        <Pie data={data} height={150} width={200} options={options} />
      </div>
    )
  }
}