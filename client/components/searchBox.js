// import React, {Component} from 'react'

// // import Map, { Marker } from '../../src/index';

// // import styles from './autocomplete.module.css';

// export default class SearchBox extends Component {
//   state = {
//     position: null
//   }

//   componentDidMount() {
//     this.renderAutoComplete()
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props !== prevProps.map) this.renderAutoComplete()
//   }

//   onSubmit(e) {
//     e.preventDefault()
//   }

//   renderAutoComplete() {
//     const {google, map} = this.props

//     if (!google || !map) return 'helloooooo'

//     const autocomplete = new google.maps.places.Autocomplete(this.autocomplete)
//     autocomplete.bindTo('bounds', map)

//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace()

//       if (!place.geometry) {
//         window.alert('No details available')
//         return
//       }

//       if (place.geometry.viewport) map.fitBounds(place.geometry.viewport)
//       else {
//         map.setCenter(place.geometry.location)
//         map.setZoom(17)
//       }
//       marker.setPosition(place.geometry.location)
//       marker.setVisible(true)
//       this.setState({position: place.geometry.location})
//     })
//   }

//   render() {
//     const {position} = this.state
//     console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <input
//             placeholder="Enter a location"
//             ref={ref => (this.autocomplete = ref)}
//             type="text"
//           />
//           <input type="submit" value="Go" />
//         </form>
//         <div>
//           <div>Lat: {position && position.lat()}</div>
//           <div>Lng: {position && position.lng()}</div>
//         </div>
//       </div>
//     )
//   }
// }
