import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import CartArea from './Cart/CartArea';
import Button from 'react-bootstrap/Button';

class Topbar extends React.Component {

  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  handleShow() {
    this.setState({show: true});
  }

  handleClose() {
    this.setState({show: false});
  }

  render() {
    return(
      <>
        <Navbar bg="dark" variant="dark" fixed="top" style={{height: "10vh"}}>
          <Nav>
            <Nav.Link onClick={() => this.handleShow()}>View Cart</Nav.Link>
            <Nav.Link onClick={this.props.handleSearch}>Course Search</Nav.Link>
            <Nav.Link onClick={this.props.handleRecommender}>Course Recommender</Nav.Link>
          </Nav>
        </Navbar>

        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <CartArea />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Topbar;