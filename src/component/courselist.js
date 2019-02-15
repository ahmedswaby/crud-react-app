import React , { Component , Fragment} from 'react';

class CourseList extends Component {
    state = {
        isEdit : false
    }
    renderCourse = () => {
        return (
            <div className="container">
                <div className="row no-gutters">
                    
                    
                    <div className="col-md-6">
                    <div className="details">
                        <span>{this.props.details.name}</span>
                        </div>
                    </div>
                    <div className=" col-md-3">
                    <div className="botton-one">
                    <button onClick={() => {this.toggleState()}}>Edit Course</button>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="botton-two">
                    <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
                    </div>
                    </div>

            
            
            </div>
            </div>

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
                <input type="text" className="form-control" ref={(v) => {this.input = v}} defaultValue={this.props.details.name} id="update"/>
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