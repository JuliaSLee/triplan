import axios from 'axios'

const GET_CHECKLIST = 'GET_CHECKLIST'

let initialState = {}

export const getChecklist = checklist => ({
  type: GET_CHECKLIST,
  checklist
})

export const fetchChecklist = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/checklist')
    console.log('data --->', data)
    dispatch(getChecklist(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHECKLIST:
      return action.checklist
    default:
      return state
  }
}
