## Overview

This is a **course enrolling/scheduling application** based on a limited number of modified data from the UW-Madison course information database.

## Course data

The course data is being fetched from `https://mysqlcs639.cs.wisc.edu:5000/classes/` and is formatted as follows:

```
{
  <alpha-numeric key of length 3>: {
    "credits": <number of credits for the course>,
    "description": <course description>,
    "keywords": <1D list of string keywords>,
    "name": <course name>,
    "number": <course number>,
    "requisites": <2D list of course requisites>,
    "sections": {
      <section number>: {
        "instructor": <instructor name>,
        "location": <section location>,
        "subsections": {
          <subsection number>: {
            "location": <subsection location>,
            "time": {
              <weekday>: <time range>, ...
            }
          }, ...
        },
        "time": {
          <weekday>: <time range>, ...
        }
      }, ...
    },
    "subject": <course subject>
  }
}
---

**Run `npm install` in the terminal after cloning to automatically install needed npm packages such as react-bootstrap**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
