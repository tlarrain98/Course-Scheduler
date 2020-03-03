import React from 'react';
import '../../css/App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Checkbox from './Checkbox';

class Interests extends React.Component {

  render() {
    return(
      <Card style={{width: 'calc(20vw - 5px)', 
                    marginLeft: '5px', 
                    height: 'calc(90vh - 10px)', 
                    position: 'fixed'}}>
        <Card.Body>
          <Card.Title>Select Course Interests</Card.Title>
          <Form.Group style={{fontSize: 'large'}}>
            <Checkbox name={"Computer Science"}/>
            <Checkbox name={"Mathematics"}/>
            <Checkbox name={"Science"}/>
            <Checkbox name={"Literature"}/>
            <Checkbox name={"Psychology"}/>
            <Checkbox name={"Chemistry"}/>
            <Checkbox name={"Engineering"}/>
            <Checkbox name={"Biology"}/>
            <Checkbox name={"Theatre"}/>
          </Form.Group>
        </Card.Body>
      </Card>
    )
  }
}

export default Interests;