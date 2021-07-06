import axios from 'axios'
import React, { Component } from 'react'
import ApiData from './ApiData'
export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ApiData: [],
      showData: false,
      message: '',
      showMessage: ''
    }
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/fruits`)
    this.setState({
      ApiData: request.data,
      showData: true
    })
  }
  addToFavorite = async (objData) => {
    const postReq = await axios.post(`http://localhost:8080/fruits/list`, objData)
    this.setState({
      message: postReq.data,
      showMessage: true
    })
  }
  render() {
    return (
      <>
        {
          this.state.showData &&
          <ApiData ApiData={this.state.ApiData}
            addToFavorite={this.addToFavorite} />

        }
      </>
    )
  }
}

export default Main
