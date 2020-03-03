import React from 'react';
import Form from 'react-bootstrap/Form';
import RatingsAndInterests from './RatingsAndInterests';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    }

    this.interests = new RatingsAndInterests();
  }

  handleClick() {
    this.setState({checked: !this.state.checked});
    if(this.props.name === "Computer Science") {
      this.interests.addInterest("computer", !this.state.checked);
    }
    else {
      this.interests.addInterest(this.props.name, !this.state.checked);
    }
  }

  render() {
    return(
      <Form.Check className="checkbox" 
                  type="checkbox" 
                  name={this.props.name} 
                  label={this.props.name}
                  onClick={() => this.handleClick()}/>
    )
  }
}

export default Checkbox;