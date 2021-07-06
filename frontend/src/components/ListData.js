import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
export class ListData extends Component {
  render() {
    return (
      <CardGroup>
        {
          this.props.ApiListData.map((obj, idx) => {
            return (
              <div key={idx}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={obj.strDrinkThumb} />
                  <Card.Body>
                    <Card.Title>{obj.strDrink}</Card.Title>
                    <Button onClick={e => this.props.deleteData(obj.slug)} variant="primary">Delete</Button>
                    <Button onClick={e => this.props.showForm(obj.slug, obj.strDrinkThumb)} variant="primary">Update</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
      </CardGroup>
    )
  }
}

export default ListData
