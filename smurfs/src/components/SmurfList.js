'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const material_ui = require('@material-ui/core')
const actions = require('../store/actions/index')
const Smurf = require('./Smurf')

/**
 * Constants
 */

const Component = React.Component
const CircularProgress = material_ui.CircularProgress
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
        {(this.props.smurfs) ?
          this.props.smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />) :
          <CircularProgress />}
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
