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
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Name"></input>
          <input type="text" name="height" value={this.state.height} onChange={this.handleOnChange} placeholder="Height"></input>
          <input type="text" name="age" value={this.state.age} onChange={this.handleOnChange} placeholder="Age"></input>
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = connect(null, { createSmurf })(NewSmurfForm)
