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
  {name: 'Flight ticket', amount: 150},
  {name: 'Art institute of Chicago', amount: 15},
  {name: 'Willis Tower Skydeck', amount: 30},
  {name: 'Avec', amount: 50},
  {name: 'Au Cheval', amount: 35},
  {name: 'Chicago History Museum', amount: 20},
  {name: 'Architecture Tour', amount: 30},
  {name: 'Shopping at Michigan Ave.', amount: 300},
  {name: 'Intelligentsia Coffee', amount: 10},
  {name: 'Parlor Pizza Bar', amount: 25},
  {name: 'Ghirardelli Ice Cream', amount: 12},
  {name: 'Uber', amount: 50},
  {name: 'Metra', amount: 10},
  {name: 'Hilton Hotel', amount: 460},
  {name: 'Garrett Popcorn', amount: 13}
]

const checklist = [
  {name: 'Book a flight ticket'},
  {name: 'Passport, ID'},
  {name: 'Credit card'},
  {name: 'Phone charger'},
  {name: 'Pajamas'},
  {name: 'Eyeglasses'},
  {name: 'Withdraw cash'},
  {name: 'Snack'},
  {name: 'Earpods'},
  {name: 'Book a hotel'},
  {name: 'Tylenol'}
]

const note = [
  {
    contents:
      'Chicago average temperature in July is 82°/70° (°F). Mostly sunny, rains 7 days on average, and windy 🌬'
  },
  {
    contents: 'Southside Chicago is dangerous🙅‍ especially at night'
  },
  {
    contents: 'Westloop has many good places to eat'
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
    location: [41.884307, -87.643409]
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
  },
  {
    name: "O'Hare International Airport",
    address: "10000 W O'Hare Ave, Chicago, IL 60666",
    location: [41.975057, -87.909333]
  }
]

const trip = [
  {name: 'Chicago, July 2019', startDate: '07-04-2019', endDate: '07-06-2019'},
  {
    name: 'New York, October 2018',
    startDate: '10-06-2018',
    endDate: '10-10-2018'
  },
  {name: 'Italy, April 2018', startDate: '04-06-2018', endDate: '04-16-2018'},
  {
    name: 'Seoul Korea, January 2017',
    startDate: '01-08-2017',
    endDate: '01-16-2017'
  }
]

const tripplace = [
  {date: '07-04-2019', hour: 20, minute: '0', tripId: 1, placeId: 1},
  {date: '07-05-2019', hour: 19, minute: '30', tripId: 1, placeId: 2}
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))
  await Budget.bulkCreate(budget)
  await Checklist.bulkCreate(checklist)
  await Note.bulkCreate(note)
  await Place.bulkCreate(place)
  await Trip.bulkCreate(trip)
  await TripPlace.bulkCreate(tripplace)
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
