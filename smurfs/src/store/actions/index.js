'use strict'

/**
 * Dependencies
 */

const axios = require('axios')

/**
 * Constants
 */

const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR'
const CREATE_SMURF_START = 'CREATE_SMURF_START'
const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS'
const CREATE_SMURF_ERROR = 'CREATE_SMURF_ERROR'
const DELETE_SMURF_START = 'DELETE_SMURF_START'
const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR'

/**
 * Define actions
 */

const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START })

  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_ERROR, payload: err }))
}

const createSmurf = (smurf) => dispatch => {
  dispatch({ type: CREATE_SMURF_START })

  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: CREATE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: CREATE_SMURF_ERROR, payload: err.response.message })
    })
}

const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_SMURF_START })

  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_ERROR, payload: err.response.message })
    })
}

/**
 * Export actions
 */

module.exports = {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  getSmurfs: getSmurfs,
  CREATE_SMURF_START,
  CREATE_SMURF_SUCCESS,
  CREATE_SMURF_ERROR,
  createSmurf: createSmurf,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_ERROR,
  deleteSmurf: deleteSmurf,
}
