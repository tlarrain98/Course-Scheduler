import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../css/App.css';


class Sections extends React.Component {
    
    getTimes() {
        let counter = 0;
        let times = [];
        
        for(const time of Object.entries(this.props.data.time)) {
            if(time[0] === "monday") {
                times.push("Monday: " + time[1] + "\n");
                if(counter !== Object.entries(this.props.data.time).length - 1) {
                    times.push(<br />);
                }
            }
            if(time[0] === "tuesday") {
                times.push("Tuesday: " + time[1]);
                if(counter !== Object.entries(this.props.data.time).length - 1) {
                    times.push(<br />);
                }
            }
            if(time[0] === "wednesday") {
                times.push("Wednesday: " + time[1] + "\n");
                if(counter !== Object.entries(this.props.data.time).length - 1) {
                    times.push(<br />);
                }
            }
            if(time[0] === "thursday") {
                times.push("Thursday: " + time[1] + "\n");
                if(counter !== Object.entries(this.props.data.time).length - 1) {
                    times.push(<br />);
                }
            }
            if(time[0] === "friday") {
                times.push("Friday: " + time[1] + "\n");
                if(counter !== Object.entries(this.props.data.time).length - 1) {
                    times.push(<br />);
                }
            }
            counter++;
        }

        return times;
    }

    render() {
        return(
            <div>
                <div>
                    <b>Times:</b> 
                    <br />
                    {this.getTimes()}
                    <br />
                    <b>Instructor:</b> {this.props.data.instructor}
                    <br />
                    <b>Location:</b> {this.props.data.location}
                    <br />
                    {/* This code has no functionality as of now
                    <Button size="sm">Add section to cart</Button>
                    &nbsp;
                    <Button size="sm" variant="secondary">Show subsections</Button> */}
                </div>
                <br />
            </div>
        )
    }
}

export default Sections;