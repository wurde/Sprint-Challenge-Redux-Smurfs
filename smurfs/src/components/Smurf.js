'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

function Smurf({ name, age, height, id }) {
  return (
    <li>{name} ({age}) {height}</li>
  )
}

/**
 * Export component
 */

module.exports = Smurf
