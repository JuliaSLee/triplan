import axios from 'axios'

const GET_BUDGET = 'GET_BUDGET'
const EDIT_BUDGET = 'EDIT_BUDGET'
const REMOVE_BUDGET = 'REMOVE_BUDGET'
const ADD_BUDGET = 'ADD_BUDGET'

let initialState = []

export const getBudget = budget => ({
  type: GET_BUDGET,
  budget
})

export const editBudget = budget => ({
  type: EDIT_BUDGET,
  budget
})

export const removeBudget = budgetId => ({
  type: REMOVE_BUDGET,
  budgetId
})

export const addBudget = budget => ({
  type: ADD_BUDGET,
  budget
})

export const fetchBudget = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/budget')
    dispatch(getBudget(data))
  } catch (err) {
    console.log(err)
  }
}

export const editActualAmount = (id, actualAmount) => async dispatch => {
  try {
    await axios.put(`/api/budget/${id}`, {actualAmount: actualAmount})
    const {data} = await axios.get(`/api/budget`)
    dispatch(editBudget(data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteBudget = id => async dispatch => {
  try {
    await axios.delete(`/api/budget/${id}`)
    dispatch(removeBudget(id))
  } catch (err) {
    console.log(err)
  }
}

export const newBudget = budget => async dispatch => {
  try {
    const {data} = await axios.post('/api/budget', budget)
    dispatch(addBudget(data))
  } catch (err) {
    console.log(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUDGET:
      return [...action.budget]
    case EDIT_BUDGET:
      return [...action.budget]
    case REMOVE_BUDGET:
      return state.filter(item => item.id !== action.budgetId)
    case ADD_BUDGET:
      return [...state, action.budget]
    default:
      return state
  }
}
