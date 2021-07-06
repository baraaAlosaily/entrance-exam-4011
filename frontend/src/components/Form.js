import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.updateData}>
        <input onChange={this.props.changeTwo} type="text" value={this.props.strDrink} />
        <input onChange={this.props.changeOne} type="text" value={this.props.strDrinkThumb} />
        <input type="submit" value="Update Form" />
      </form>
    )
  }
}

export default Form
