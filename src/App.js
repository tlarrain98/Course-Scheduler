import React from 'react';
import './css/App.css';
import Topbar from './Components/Topbar';
import ContentHandler from './Components/ContentHandler';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      subjects: [],
      show: 0
    };
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Topbar />
        <ContentHandler showNumber={this.state.show}/>
      </>
    )
  }
}

export default App;
