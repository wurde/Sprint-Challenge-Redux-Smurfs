'use strict'

/**
 * Dependencies
 */

const express = require('express')
const cors = require('cors')

/**
 * Constants
 */

const port = 3333

/**
 * Locals
 */

let smurfs = [
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  }
]
let smurfId = smurfs.length

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(express.json())
app.use(cors())

/**
 * Define error handler
 */

const sendUserError = (msg, res) => {
  res.status(422)
  res.json({ Error: msg })
  return
}

/**
 * Routes
 */

app.get('/smurfs', (req, res) => {
  res.json(smurfs)
})

app.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body
  const newSmurf = { name, age, height, id: smurfId }
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    )
  }
  const findSmurfByName = smurf => {
    return smurf.name === name
  }
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    )
  }

  smurfs.push(newSmurf)
  smurfId++
  res.json(smurfs)
})

app.put('/smurfs/:id', (req, res) => {
  const { id } = req.params
  const { name, age, height } = req.body
  const findSmurfById = smurf => {
    return smurf.id == id
  }
  const foundSmurf = smurfs.find(findSmurfById)
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res)
  } else {
    if (name) foundSmurf.name = name
    if (age) foundSmurf.age = age
    if (height) foundSmurf.height = height
    res.json(smurfs)
  }
})

app.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params
  const foundSmurf = smurfs.find(smurf => smurf.id == id)

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf }
    smurfs = smurfs.filter(smurf => smurf.id != id)
    res.status(200).json(smurfs)
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res)
  }
})

/**
 * Start server
 */

async function start_server() {
  process.title = 'redux-smurfs'

  app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
  })
}

if (module === require.main) {
  start_server()
}

/**
 * Export app
 */

module.exports = app
