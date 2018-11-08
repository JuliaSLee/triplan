import axios from 'axios'

const GET_TRIPS = 'GET_TRIPS'

let initialState = []

export const getTrips = trip => ({
  type: GET_TRIPS,
  trip
})

export const fetchTrips = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/trip')
    dispatch(getTrips(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRIPS:
      return [...action.trip]
    default:
      return state
  }
}
