import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
export class ApiData extends Component {
  render() {
    return (
      <CardGroup>
        {this.props.ApiData.map((obj, idx) => {
          return (

            <div key={idx}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={obj.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{obj.strDrink}</Card.Title>
                  <Button onClick={e => this.props.addToFavorite(obj)} variant="primary">Add To Favorite</Button>
                </Card.Body>
              </Card>
            </div>

          )
        })}
      </CardGroup>
    )
  }
}

export default ApiData
