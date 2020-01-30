import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { AddList } from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        AddList: list => dispatch(AddList(list))
    }
}

class ConnectedInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '' }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.task.value || !event.target.task.value.trim()) {
            return;
        }
        this.props.AddList(event.target.task.value)
        this.setState({ value: "" })
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{ padding: '5px' }}>
                    <TextField value={this.state.value} onChange={this.handleChange} name="task" id="standard-basic" label="To Do" />
                </div>
                <div className="add-button"> <Button type="submit" variant="contained" color="primary">
                    Add List
                </Button>
                </div>
            </form>
        )
    }
}

const ToDoInput = connect(null, mapDispatchToProps)
    (ConnectedInput)

export default ToDoInput;