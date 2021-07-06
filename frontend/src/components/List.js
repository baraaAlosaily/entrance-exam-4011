import React, { Component } from 'react'
import axios from 'axios'
import ListData from './ListData'
import Form from './Form'
export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ApiListData: [],
      showListData: false,
      message: '',
      showMessage: '',
      slug: '',
      strDrinkThumb: '',
      strDrink: '',
      showForm: false
    }
  }
  showForm = async (slug, strDrinkThumb, strDrink) => {
    this.setState({
      slug: slug,
      strDrinkThumb: strDrinkThumb,
      strDrink: strDrink,
      showForm: true
    })
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/fruits/list`)
    this.setState({
      ApiListData: request.data,
      showListData: true
    })
  }
  changeOne = (e) => this.setState({ strDrinkThumb: e.target.value })
  changeTwo = (e) => this.setState({ strDrink: e.target.value })
  updateData = async (e) => {
    e.preventDefault()
    const request = await axios.put(`http://localhost:8080/fruits/list/${this.state.slug}`, { strDrinkThumb: this.state.strDrinkThumb }, { strDrink: this.state.strDrink })
    this.setState({
      ApiListData: request.data
    })
  }
  deleteData = async (slug) => {
    await axios.delete(`http://localhost:8080/fruits/list/${slug}`)
    const newFruitList = this.state.ApiListData.filter(obj => obj.slug !== slug)
    this.setState({
      ApiListData: newFruitList
    })
  }
  render() {
    return (
      <>
        {
          this.state.showForm &&
          <Form
            changeOne={this.changeOne}
            changeTwo={this.changeTwo}
            updateData={this.updateData}
            strDrinkThumb={this.state.strDrinkThumb}
            strDrink={this.state.strDrink} />
        }
        {
          this.state.showListData &&
          <ListData ApiListData={this.state.ApiListData}
            deleteData={this.deleteData}
            showForm={this.showForm} />
        }
      </>
    )
  }
}

export default List
