import axios from 'axios'

const GET_NOTE = 'GET_NOTE'

export const getNote = note => ({
  type: GET_NOTE,
  note
})

export const fetchNote = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/note')
    dispatch(getNote(data))
  } catch (err) {
    console.log(err)
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NOTE:
      return action.note
    default:
      return state
  }
}
