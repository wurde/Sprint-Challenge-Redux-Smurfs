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
  isFetchingSmurfs: false,
  isCreatingSmurf: false,
  isUpdatingSmurf: false,
  isDeletingSmurf: false,
  error: null,
}

/**
 * Define reducers
 */

function reducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

/**
 * Export reducers
 */

module.exports = reducers
