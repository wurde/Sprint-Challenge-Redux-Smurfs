'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component
const SmurfStyle = styles.SmurfStyle

/**
 * Define component
 */

function Smurf({ name, age, height, id }) {
  return (
    <SmurfStyle>{name} ({age}) {height}</SmurfStyle>
  )
}

/**
 * Export component
 */

module.exports = Smurf
