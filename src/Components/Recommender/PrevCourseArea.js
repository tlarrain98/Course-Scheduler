import React from 'react';
import PrevCourse from './PrevCourse';

class PrevCourseArea extends React.Component {

    getCourses() {
        let courses = [];
    
        if(this.props.prevCourses.data != null) {
          for(const course of Object.entries(this.props.prevCourses.data)) {
            courses.push(
                <PrevCourse key={course[1]} 
                            courseKey={course[1]} 
                            allCourses={this.props.allCourses}/>
            )
          }
        }
        return courses;
    }

    render() {
        return(
            <div style={{marginTop: 'calc(10vh + 5px)'}}>
                {this.getCourses()}
            </div>
        )
    }
}

export default PrevCourseArea;