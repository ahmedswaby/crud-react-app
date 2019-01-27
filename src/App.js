import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import CourseForm from './component/courseform';
import CourseList from './component/courselist';

class App extends Component {
  state = {
    courses : [
      {name: 'HTML'},
      {name: 'Jquery'},
      {name: 'javaScript'},
      {name: 'PHP'}
    ] ,
    current : ''
  }
  // update course 
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
// add Course 
  addCourse = (e) => {
    e.preventDefault();
    if (e.target.add.value === '') {
      return false
    } else {
      let {current} = this.state;
      let courses = this.state.courses
      courses.push({name : current})
      this.setState({
        courses,
        current : ''
      })
      }
  }
  // deleteCourse 
  deleteCourse = (index) => {
    let {courses} = this.state;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }
  // edit course
  editCourse = (index, value) => {
    let {courses} = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }
  render() {
    const {courses} = this.state;
    const length = courses.length;
    const courseList = length ? courses.map( (course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    }) : (<h1> There's no items to show</h1>)
    return (
      <section className="App">
      <div className="container text-center">
            <h2>Add Course </h2>
            <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
            <ul className="list-unstyled">{courseList}</ul>
        </div>
      </section>
    );
  }
}

export default App;
