'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const actions = require('../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const getSmurfs = actions.getSmurfs

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

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <ul>
        {this.props.smurfs &&
          this.props.smurfs.map(smurf => <li key={smurf.id}>{smurf.name} ({smurf.age}) {smurf.height}</li> )}
      </ul>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { getSmurfs })(SmurfList)
