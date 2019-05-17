'use strict'

/**
 * Dependencies
 */

const redux = require('redux')
const redux_logger = require('redux-logger')
const redux_thunk = require('redux-thunk')
const reducers = require('./reducers/index')

/**
 * Constants
 */

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = redux_logger.logger
const thunk = redux_thunk.default

/**
 * Define store
 */

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    thunk
  )
)

/**
 * Export store
 */

module.exports = store
