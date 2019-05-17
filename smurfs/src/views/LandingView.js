'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/index')

/**
 * Constants
 */

const NewSmurfForm = components.NewSmurfForm
const SmurfList = components.SmurfList

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

            <NewSmurfForm />
            <SmurfList />
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
