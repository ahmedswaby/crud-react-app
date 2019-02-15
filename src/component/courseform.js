import React from 'react';
const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse} className="form">

            <div className="row">


            <div className="col-sm-7 col-xs 12">
            <input type="text" value={props.current} onChange={props.updateCourse} id="add" className="form-control"/>
            </div>

            <div className="col-sm-5 col-xs 12"><p><button type="submit" className="btn btn-primary">Add Course</button></p></div>
            </div>
        </form>
        
    )
}
export default CourseForm;