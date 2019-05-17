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
const deleteSmurf = actions.deleteSmurf

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

  handleDeleteSmurf = (id) => {
    let yes = window.confirm("Are you sure?")

    if (yes) {
      this.props.deleteSmurf(id)
    }
  }

  render() {
    return (
      <SmurfListStyle>
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 col-lg-4 py-3 text-center">
            {(this.props.smurfs) ?
              this.props.smurfs.map(smurf => {
                return (
                  <div key={smurf.id} className="card my-2">
                    <div className="card-body">
                      <Smurf {...smurf} />
                      <span className='btn btn-link' onClick={() => this.handleDeleteSmurf(smurf.id)}>x</span>
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

module.exports = connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList)
