import React from 'react';
import '../../css/App.css';
import Card from 'react-bootstrap/Card';

class RecCourse extends React.Component {
  render() {
    return(
      <>
        <div>
          <b>Course Title: {this.props.data.name}</b>
          <br/>
          <b>Course Number: {this.props.data.number}</b>
          <br/>
          <b>Credits: {this.props.data.credits}</b>
        </div>
        <br/>
      </>
    )
  }
}

export default RecCourse;
