import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../css/App.css'
import Form from 'react-bootstrap/Form';
import RatingsAndInterests from './RatingsAndInterests';

class PrevCourse extends React.Component {
  constructor() {
      super();
      
      this.rating = React.createRef();
      this.rate = new RatingsAndInterests();
  }

  getCredits() {
    if(this.props.allCourses[this.props.courseKey].credits === 1) {
      return '1 credit';
    }
    else{
      return this.props.allCourses[this.props.courseKey].credits + ' credits';
    }
  }

  assignRating() {
    if(this.rating.current.value >= 1 && this.rating.current.value <= 5) {
      this.rate.addRating(this.props.courseKey, this.rating.current.value);
    }
  }

  handleKey(e) {
    if(['0','1','2','3','4','5','6','7','8','9','Backspace','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab'].indexOf(e.key) === -1)
      e.preventDefault();
  }

  render() {
    return(
      <Card style={{width: '30vw', marginTop: '5px', marginBottom: '5px'}}>
        <Card.Body>
          <Card.Title>
            {this.props.allCourses[this.props.courseKey].name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.allCourses[this.props.courseKey].number} - {this.getCredits()}
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Form>
            <Form.Group>
              <Form.Label>Rate this previously taken course: </Form.Label>
              <Form.Control type="text" 
                            placeholder="1-5" 
                            autoComplete="off"
                            onChange={() => this.assignRating()}
                            style={{width: '50px'}}
                            ref={this.rating}
                            onKeyDown={(e) => this.handleKey(e)}/>
            </Form.Group>
          </Form>
        </Card.Footer>
      </Card>
    )
  }
}

export default PrevCourse;