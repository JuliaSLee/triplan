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
  {name: 'Pizza Parlor', amount: 25},
  {name: "Jeni's Icecream", amount: 1},
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

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))
  await Budget.bulkCreate(budget)
  await Checklist.bulkCreate(checklist)
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
