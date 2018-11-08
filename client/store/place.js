import axios from 'axios'

const GET_PLACES = 'GET_PLACES'

let initialState = []

export const getPlaces = place => ({
  type: GET_PLACES,
  place
})

export const fetchPlaces = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/place')
    dispatch(getPlaces(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES:
      return [...action.place]
    default:
      return state
  }
}
