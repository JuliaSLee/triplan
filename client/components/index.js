/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as Note} from './note'
export {default as Checklist} from './checklist'
export {default as MapContainer} from './mapContainer'
export {default as VisualMap} from './map'
// export {default as MyMarkersList} from './pin'
export {default as AllTrips} from './allTrips'
export {default as SingleTrip} from './singleTrip'
export {default as Budget} from './budget'
export {default as ChecklistForm} from './checklistForm'
export {Login, Signup} from './auth-form'
