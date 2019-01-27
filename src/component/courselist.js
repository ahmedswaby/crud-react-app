import React , { Component , Fragment} from 'react';

class CourseList extends Component {
    state = {
        isEdit : false
    }
    renderCourse = () => {
        return (

            <li><span>{this.props.details.name}</span>
            <button onClick={() => {this.toggleState()}}>Edit Course</button>
            <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>

        )
    }
    // toggle state
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }
    updateCourseItem = (e) => {
        if (e.target.update.value === '') {
            e.preventDefault();
            return false
        } else {
            e.preventDefault();
            this.props.editCourse(this.props.index, this.input.value);
            this.toggleState();
        }
    }
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem} className="updated-form">
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name} id="update"/>
                <button className="btn btn-success">Update Course</button>
            </form>
        )
    }
    render() {
        let {isEdit} = this.state;
        return (
            <Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        )
    }
}

export default CourseList;