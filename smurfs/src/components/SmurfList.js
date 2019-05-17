'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const material_ui = require('@material-ui/core')
const actions = require('../store/actions/index')
const styles = require('./styles/index')
const Smurf = require('./Smurf')

/**
 * Constants
 */

const Component = React.Component
const SmurfListStyle = styles.SmurfListStyle
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
      <SmurfListStyle>
        <ul>
          {(this.props.smurfs) ?
            this.props.smurfs.map(smurf => <li key={smurf.id}><Smurf {...smurf} /></li>) :
            <CircularProgress />}
        </ul>
      </SmurfListStyle>
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
