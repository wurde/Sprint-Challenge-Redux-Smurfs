'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

/**
 * Define reducer
 */

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = reducer
