'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const store = require('./store/index')

/**
 * Constants
 */

const Provider = react_redux.Provider

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your Redux version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </Provider>
  )
}

/**
 * Export component
 */

module.exports = App
