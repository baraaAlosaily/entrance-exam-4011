import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export class Header extends Component {
  render() {
    return (
      <Nav style={{ background: "black" }} defaultActiveKey="/" as="ul">
        <h2 style={{ color: "white" }}>Coffee House</h2>
        <Nav.Item as="li">
          <Nav.Link style={{ color: "white" }} href="/">Main Drinks</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link style={{ color: "white" }} href="List">Favorite Drinks</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

export default Header
