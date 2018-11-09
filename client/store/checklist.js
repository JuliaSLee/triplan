import axios from 'axios'

const GET_CHECKLIST = 'GET_CHECKLIST'
const ADD_CHECKLIST = 'ADD_CHECKLIST'
const REMOVE_CHECKLIST = 'REMOVE_CHECKLIST'

let initialState = []

export const getChecklist = checklist => ({
  type: GET_CHECKLIST,
  checklist
})

export const addChecklist = checklist => ({
  type: ADD_CHECKLIST,
  checklist
})

export const removeChecklist = checklist => ({
  type: REMOVE_CHECKLIST,
  checklist
})

export const fetchChecklist = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/checklist')
    dispatch(getChecklist(data))
  } catch (err) {
    console.error(err)
  }
}

export const postChecklist = checklistId => async dispatch => {
  try {
    const {data} = await axios.post(`/api/checklist/${checklistId}`)
    dispatch(addChecklist(data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteChecklist = checklistId => async dispatch => {
  try {
    await axios.delete(`/api/checklist/${checklistId}`)
    dispatch(removeChecklist(checklistId))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHECKLIST:
      return [...action.checklist]
    case ADD_CHECKLIST:
      return [...state, action.checklist]
    case REMOVE_CHECKLIST:
      return state.filter(item => item !== action.checklist)
    default:
      return state
  }
}
