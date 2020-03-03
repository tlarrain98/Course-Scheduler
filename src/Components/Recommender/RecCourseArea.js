import React from 'react';
import RecCourse from './RecCourse';
import '../../css/App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GetRecCourses from './GetRecCourses';
import RatingsAndInterests from './RatingsAndInterests';

class RecCourseArea extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  handleClick() {
    this.setState({show: true});
    let GRC = new GetRecCourses();
    GRC.generateCourses(this.props.allCourses, this.props.prevCourses);
  }

  showCourses() {
    let GRC = new GetRecCourses();
    let courses1 = GRC.getCourses();
    let courses2 = [];

    console.log(courses1);
    if(Object.entries(courses1).length === 0) {
      return 'Please provide more interests/ratings to generate courses';
    }
    else {
      for(const course of Object.entries(courses1)) {
        courses2.push(
          <RecCourse key={course[1]} data={this.props.allCourses[course[1]]}/>
        )
      }
      return courses2;
    }
    
  }

  render() {
    if(this.state.show === false) {
      return(
        <Card style={{
          width: 'calc(50vw - 30px)',
          height: 'calc(90vh - 10px)',
          position: 'fixed'}}>
          <Card.Body>
            <Button onClick={() => this.handleClick()}>Click here to generate recommended courses</Button>
          </Card.Body>
        </Card>
      )
    }
    else {
      return(
        <Card style={{width: 'calc(50vw - 30px)',
                      height: 'calc(90vh - 10px)',
                      position: 'fixed'}}>
          <Card.Body>
            <Button onClick={() => this.handleClick()}>Click here to regenerate recommended courses</Button>
            <br/>
            <br/>
            {this.showCourses()}
          </Card.Body>
        </Card>
      )
    }
  }
}

export default RecCourseArea;