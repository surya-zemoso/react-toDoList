import React from "react";
import { connect } from "react-redux";
import { RemoveList } from "../actions/index";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const mapStateToProps = state => {
    return { doList: state.doList }
}
const mapDispatchToProps = dispatch => {
    return {
        RemoveList: index => dispatch(RemoveList(index))
    }
}

const ConnectedList = ({ doList, RemoveList }) =>
    (
        <div className="ListItems">
            <List>
                {doList.map((el, index) => (
                    <ListItem key={index.toString()} dense button>
                        <Tooltip title={el}>
                            <ListItemText primary={el} />
                        </Tooltip>

                        <ListItemSecondaryAction>
                            <Tooltip title="delete">
                                <IconButton edge="end" onClick={() => RemoveList(index)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    )


const ToDoList = connect(mapStateToProps, mapDispatchToProps)
    (ConnectedList);

export default ToDoList;