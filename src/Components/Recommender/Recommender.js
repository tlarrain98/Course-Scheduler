import React from 'react';
import PrevCourseArea from './PrevCourseArea';
import Interests from './Interests';
import RecCourseArea from './RecCourseArea';

class Recommender extends React.Component {
  constructor() {
    super();
    this.state = {
      prevCourses: {}
    }
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed').then(
      res => res.json()
    ).then(entries => this.setState({prevCourses: entries}));
  }

  render() {
    return(
      <div>
        <div>
          <Interests />
        </div>
        <div style={{marginLeft: 'calc(50vw + 10px)'}}>
          <RecCourseArea allCourses={this.props.allCourses} 
                         prevCourses={this.state.prevCourses}/>
        </div>
        <div style={{marginLeft: 'calc(20vw + 5px)'}}>
          <PrevCourseArea prevCourses={this.state.prevCourses} 
                          allCourses={this.props.allCourses}/>
        </div>
      </div>
    )
  }
}

export default Recommender;