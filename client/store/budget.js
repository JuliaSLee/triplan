import axios from 'axios'

const GET_BUDGET = 'GET_BUDGET'

let initialState = []

export const getBudget = budget => ({
  type: GET_BUDGET,
  budget
})

export const fetchBudget = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/budget')
    dispatch(getBudget(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUDGET:
      return [...action.budget]
    default:
      return state
  }
}
