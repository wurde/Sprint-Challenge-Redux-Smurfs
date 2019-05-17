'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const styles = require('./styles/index')
const actions = require('../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const NewSmurfFormStyle = styles.NewSmurfFormStyle
const connect = react_redux.connect
const createSmurf = actions.createSmurf

/**
 * Define component
 */

class NewSmurfForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createSmurf(this.state)
    this.setState({ name: '', age: '', height: '' })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <NewSmurfFormStyle>
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 col-lg-4">
            <form onSubmit={this.handleOnSubmit}>
              <input type="text" name="name" value={this.state.name}
                     onChange={this.handleOnChange}
                     placeholder="Name"
                     className="form-control mb-2"></input>
              <input type="text" name="height" value={this.state.height}
                     onChange={this.handleOnChange}
                     placeholder="Height"
                     className="form-control mb-2"></input>
              <input type="text" name="age" value={this.state.age}
                     onChange={this.handleOnChange}
                     placeholder="Age"
                     className="form-control mb-2"></input>

              <button type="submit" className="btn btn-block btn-primary">Add Smurf</button>
            </form>
          </div>
        </div>
      </NewSmurfFormStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = connect(null, { createSmurf })(NewSmurfForm)
