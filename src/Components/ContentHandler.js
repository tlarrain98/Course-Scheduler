import React from 'react';
import '../css/App.css';
import Sidebar from './Search/Sidebar';
import CourseArea from './Search/CourseArea';
import Topbar from './Topbar';
import Recommender from './Recommender/Recommender';

class ContentHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          allCourses: {},
          filteredCourses: {},
          subjects: [],
          show: "search"
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleRecommender = this.handleRecommender.bind(this);
    }

    componentDidMount() {
      fetch('https://mysqlcs639.cs.wisc.edu:5000/classes').then(
        res => res.json()
      ).then(data => this.setState({allCourses: data, filteredCourses: data, subjects: this.getSubjects(data)}));
    }

    handleSearch() {
      this.setState({show: "search"});
    }

    handleRecommender() {
      this.setState({show: "recommender"});
    }
    
    getSubjects(data) {
      let subjects = [];
      subjects.push("All");
    
      for(const course of Object.values(data)) {
        if(subjects.indexOf(course.subject) === -1)
          subjects.push(course.subject);
      }
    
      return subjects;
    }
    
    setCourses(courses) {
      this.setState({filteredCourses: courses})
    }
    
    renderContent() {
      if(this.state.show === "search") {
        return (
          <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
              />
            <Sidebar setCourses={(courses) => this.setCourses(courses)} 
                     courses={this.state.allCourses} 
                     subjects={this.state.subjects}/>
            <div style={{marginLeft: '20vw', marginTop: '5vw'}}>
              <CourseArea data={this.state.filteredCourses}/>
            </div>
          </>
        )
      }

      else if(this.state.show === "recommender") {
        return (
          <>
            <Recommender allCourses={this.state.allCourses}/>
          </>
        )
      }
    }

    render() {
      return(
        <>
          <Topbar handleSearch={this.handleSearch}
                  handleRecommender={this.handleRecommender}/>
          <div className="wrapper">
            {this.renderContent()}
          </div>
        </>
      )
    }
}

export default ContentHandler;