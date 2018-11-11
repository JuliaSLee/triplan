'use strict'

const db = require('../server/db')
const {
  User,
  Budget,
  Checklist,
  Note,
  Place,
  Trip,
  TripPlace
} = require('../server/db/models')

const users = [
  {email: 'cody@email.com', password: '123'},
  {email: 'murphy@email.com', password: '123'},
  {email: 'julia@email.com', password: '123'}
]

const budget = [
  {name: 'Flight ticket', amount: 150, tripId: 1},
  {name: 'Art institute of Chicago', amount: 15, tripId: 1},
  {name: 'Willis Tower Skydeck', amount: 30, tripId: 1},
  {name: 'Avec', amount: 50, tripId: 1},
  {name: 'Au Cheval', amount: 35, tripId: 1},
  {name: 'Chicago History Museum', amount: 20, tripId: 1},
  {name: 'Architecture Tour', amount: 30, tripId: 1},
  {name: 'Shopping at Michigan Ave.', amount: 300, tripId: 1},
  {name: 'Intelligentsia Coffee', amount: 10, tripId: 1},
  {name: 'Parlor Pizza Bar', amount: 25, tripId: 1},
  {name: 'Ghirardelli Ice Cream', amount: 12, tripId: 1},
  {name: 'Uber', amount: 50, tripId: 1},
  {name: 'Metra', amount: 10, tripId: 1},
  {name: 'Hilton Hotel', amount: 460, tripId: 1},
  {name: 'Garrett Popcorn', amount: 13, tripId: 1}
]

const checklist = [
  {name: 'Book a flight ticket', tripId: 1},
  {name: 'Passport, ID', tripId: 1},
  {name: 'Credit card', tripId: 1},
  {name: 'Phone charger', tripId: 1},
  {name: 'Pajamas', tripId: 1},
  {name: 'Eyeglasses', tripId: 1},
  {name: 'Withdraw cash', tripId: 1},
  {name: 'Snack', tripId: 1},
  {name: 'Earpods', tripId: 1},
  {name: 'Book a hotel', tripId: 1},
  {name: 'Tylenol', tripId: 1}
]

const note = [
  {
    contents:
      'Chicago average temperature in July is 82°/70° (°F). Mostly sunny, rains 7 days on average, and windy 🌬',
    tripId: 1
  },
  {
    contents: 'Southside Chicago is dangerous🙅‍ especially at night',
    tripId: 1
  },
  {
    contents: 'Westloop has many good places to eat',
    tripId: 1
  }
]

const place = [
  {
    name: 'Avec',
    address: '615 W Randolph St, Chicago, IL 60661',
    location: [41.884307, -87.643409]
  },
  {
    name: 'Parlor Pizza Bar',
    address: '108 N Green St, Chicago, IL 60607',
    location: [41.883229, -87.648802]
  },
  {
    name: 'Willis Tower',
    address: '233 S Wacker Dr, Chicago, IL 60606',
    location: [41.878875, -87.635904]
  },
  {
    name: 'Art Institute of Chicago',
    address: '111 S Michigan Ave, Chicago, IL 60603',
    location: [41.879574, -87.624005]
  },
  {
    name: 'Millennium Park',
    address: '201 E Randolph St, Chicago, IL 60602',
    location: [41.882489, -87.623782]
  },
  {
    name: 'Adler Planetarium',
    address: '1300 S Lake Shore Dr, Chicago, IL 60605',
    location: [41.866413, -87.607148]
  },
  {
    name: 'Ghirardelli Ice Cream',
    address: '400 N Michigan Ave #100, Chicago, IL 60611',
    location: [41.889564, -87.624683]
  },
  {
    name: 'Au Cheval',
    address: '800 W Randolph St, Chicago, IL 60607',
    location: [41.884617, -87.647609]
  }
]

const trip = [
  {
    name: 'Chicago, July 2019',
    startDate: '07-04-2019',
    endDate: '07-05-2019',
    userId: 3
  },
  {
    name: 'New York, October 2018',
    startDate: '10-06-2018',
    endDate: '10-10-2018',
    userId: 3
  },
  {
    name: 'Italy, April 2018',
    startDate: '04-06-2018',
    endDate: '04-16-2018',
    userId: 3
  },
  {
    name: 'Seoul Korea, January 2017',
    startDate: '01-08-2017',
    endDate: '01-16-2017',
    userId: 3
  }
]

const tripplace = [
  {date: '07-04-2019', tripId: 1, placeId: 1},
  {date: '07-05-2019', tripId: 1, placeId: 2},
  {date: '07-04-2019', tripId: 1, placeId: 3},
  {date: '07-05-2019', tripId: 1, placeId: 4},
  {date: '07-05-2019', tripId: 1, placeId: 5},
  {date: '07-05-2019', tripId: 1, placeId: 6},
  {date: '07-04-2019', tripId: 1, placeId: 7},
  {date: '07-04-2019', tripId: 1, placeId: 8}
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))
  await Trip.bulkCreate(trip)
  await Place.bulkCreate(place)
  await TripPlace.bulkCreate(tripplace)
  await Budget.bulkCreate(budget)
  await Checklist.bulkCreate(checklist)
  await Note.bulkCreate(note)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
