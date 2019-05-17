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
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 col-lg-4 py-3">
            {(this.props.smurfs) ?
              this.props.smurfs.map(smurf => {
                return (
                  <div key={smurf.id} className="card my-2">
                    <div className="card-body">
                      <Smurf {...smurf} />
                    </div>
                  </div>
                )}) :
              <CircularProgress />}
          </div>
        </div>
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
