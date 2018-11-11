// import React, {Component} from 'react'
// import {List, Header, Input, Button, Icon} from 'semantic-ui-react'

// export default class PlaceList extends Component {
//   render() {
//     const {places} = this.props

//     return (
//       <List>
//         <Button>Show All</Button>
//         <Header>Day 1</Header>
//         {places.map(pinPlace => {
//           if (
//             pinPlace.trips[0].startDate === pinPlace.trips[0].tripplace.date
//           ) {
//             return (
//               <div key={pinPlace.id}>
//                 <List.Item>
//                   <List.Content>
//                     <List.Icon name="marker" />
//                     <List.Header as="a">{pinPlace.name}</List.Header>
//                     <List.Description />
//                   </List.Content>
//                 </List.Item>
//               </div>
//             )
//           }
//         })}
//         <List.Item>
//           <Input placeholder="Search" />
//           <Button>
//             <Icon name="plus" />
//             Add
//           </Button>
//         </List.Item>

//         <Header>Day 2</Header>
//         {places.map(pinPlace => {
//           if (pinPlace.trips[0].endDate === pinPlace.trips[0].tripplace.date) {
//             return (
//               <div key={pinPlace.id}>
//                 <List.Item>
//                   <List.Content>
//                     <List.Icon name="marker" />
//                     <List.Header as="a">{pinPlace.name}</List.Header>
//                     <List.Description />
//                   </List.Content>
//                 </List.Item>
//               </div>
//             )
//           }
//         })}
//         <List.Item>
//           <Input placeholder="Search" />
//           <Button>
//             <Icon name="plus" />
//             Add
//           </Button>
//         </List.Item>
//       </List>
//     )
//   }
// }
