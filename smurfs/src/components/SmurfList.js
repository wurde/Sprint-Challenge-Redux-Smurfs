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

class SmurfList extends Component {
  constructor() {
    super()
    this.state = {
      smurfs: []
    }
  }

  render() {
    return (
      <div>
        SmurfList
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = SmurfList
