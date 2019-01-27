import React from 'react';
const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse} className="form">
            <input type="text" value={props.current} onChange={props.updateCourse} id="add" className="form-control "/>
            <button type="submit" className="btn btn-primary">Add Course</button>
        </form>
    )
}
export default CourseForm;