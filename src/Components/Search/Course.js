import React from 'react';
import '../../css/App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Sections from './Sections';
import Cart from '../Cart/Cart';

let cart = new Cart();

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleShow() {
    this.setState({show: !this.state.show});
  }

  getCredits() {
    if(this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }

  addToCart() {
    cart.add(this.props.data, this.props.courseKey);
  }

  getSections() {
    let sects = [];

    for(const section of Object.entries(this.props.data.sections)) {
      sects.push (
        <Sections key={section[0]} 
                  data={section[1]} 
                  show={this.state.show} 
                  initInfo={this.props.data}/>
      )
    }
    
    return sects;
  }

  render() {
    if(this.state.show) {
      return (
        <>
          <Card style={{width: '80%', marginTop: '5px', marginBottom: '5px'}}>
            <Card.Body>
              <Card.Title>
                {this.props.data.name}
                &nbsp;
                <Button variant="secondary" onClick={() => this.handleShow()}>Close sections</Button>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
              {this.getSections()}
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => this.addToCart()}>Add all sections to cart</Button>
              &nbsp;
              <Button variant="secondary" onClick={() => this.handleShow()}>Close sections</Button>
            </Card.Footer>
          </Card>
        </>
      )
    }
    else {
      return (
        <>
          <Card style={{width: '40%', marginTop: '5px', marginBottom: '5px'}}>
            <Card.Body>
              <Card.Title>{this.props.data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => this.addToCart()}>Add all sections to cart</Button>
              &nbsp;
              <Button variant="secondary" onClick={() => this.handleShow()}>Show sections</Button>
            </Card.Footer>
          </Card>
        </>
      )
    }
  }
}

export default Course;
