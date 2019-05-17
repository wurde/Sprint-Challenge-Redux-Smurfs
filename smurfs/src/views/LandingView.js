'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/index')

/**
 * Define view component
 */

function LandingView() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your Redux version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
          </div>
        </div>
      </div>
    </main>
  )
}

/**
 * Export view component
 */

module.exports = LandingView
