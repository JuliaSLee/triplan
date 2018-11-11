import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Doughnut, Bar} from 'react-chartjs-2'

export default class Chart extends Component {
  render() {
    const budgetData = this.props.budget

    //budget data
    const dataBudget = {
      labels: budgetData
        .filter(budgetList => budgetList.amount !== null)
        .map(list => list.name),
      datasets: [
        {
          data: budgetData
            .filter(budgetList => budgetList.amount !== null)
            .map(list => list.amount),
          backgroundColor: [
            '#f47777',
            '#f48977',
            '#f49677',
            '#f4a477',
            '#f4c477',
            '#eff477',
            '#d0f477',
            '#b9f477',
            '#9ef477',
            '#85f477',
            '#77f4a2',
            '#77f4d0'
          ],
          hoverBackgroundColor: ['#FF6384']
        }
      ]
    }
    // Doughnut chart options
    const doughnutOptions = {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        position: 'left',
        labels: {
          boxWidth: 50
        }
      }
    }
    // Actual amount data
    const dataActual = {
      labels: budgetData
        .filter(budgetList => budgetList.actualAmount !== null)
        .map(list => list.name),
      datasets: [
        {
          data: budgetData
            .filter(budgetList => budgetList.actualAmount !== null)
            .map(list => list.actualAmount),
          backgroundColor: [
            '#f47777',
            '#f48977',
            '#f49677',
            '#f4a477',
            '#f4c477',
            '#eff477',
            '#d0f477',
            '#b9f477',
            '#9ef477',
            '#85f477',
            '#77f4a2',
            '#77f4d0'
          ],
          hoverBackgroundColor: ['#FF6384']
        }
      ]
    }

    // Bar Chart
    let totalBudgetAmount = 0
    const totalBudget = this.props.budget.map(item => {
      totalBudgetAmount += item.amount
      return totalBudgetAmount
    })
    let totalActualAmount = 0
    const totalActual = this.props.budget.map(item => {
      totalActualAmount += item.actualAmount
      return totalActualAmount
    })

    const dataTotal = {
      labels: [''],
      datasets: [
        {
          data: [totalBudgetAmount],
          backgroundColor: ['#57af59'],
          label: 'Budget'
        },
        {
          data: [totalActualAmount],
          backgroundColor: ['#74a0f2'],
          label: 'Actual'
        }
      ]
    }

    return (
      <div>
        <h2>Budget</h2>
        <Doughnut
          data={dataBudget}
          height={200}
          width={800}
          options={doughnutOptions}
        />
        <h2>Actual</h2>
        <Doughnut
          data={dataActual}
          height={200}
          width={800}
          options={doughnutOptions}
        />
        <Bar
          data={dataTotal}
          width={500}
          height={500}
          options={{
            maintainAspectRatio: false,
            responsive: false,
            legend: {
              position: 'left',
              labels: {
                boxWidth: 50
              }
            }
          }}
        />
      </div>
    )
  }
}
