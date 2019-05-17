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
    case actions.FETCH_SMURFS_START:
      return Object.assign({}, state, {
        isFetchingSmurfs: true,
        error: ''
      })
    case actions.FETCH_SMURFS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingSmurfs: false,
        error: '',
        smurfs: action.payload
      })
    case actions.FETCH_SMURFS_ERROR:
      return Object.assign({}, state, {
        isFetchingSmurfs: false,
        error: action.payload
      })
    case actions.CREATE_SMURF_START:
      return Object.assign({}, state, {
        isCreatingSmurf: true,
        error: ''
      })
    case actions.CREATE_SMURF_SUCCESS:
      return Object.assign({}, state, {
        isCreatingSmurf: false,
        error: '',
        smurfs: action.payload
      })
    case actions.CREATE_SMURF_ERROR:
      return Object.assign({}, state, {
        isCreatingSmurf: false,
        error: action.payload
      })
    default:
      return state
  }
}

/**
 * Export reducers
 */

module.exports = reducers
