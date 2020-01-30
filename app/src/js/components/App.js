import React from 'react';
import '../../App.css';
import ToDoInput from './ToDoInput.js';
import ToDoList from './List.js';

function App() {
    return (
        <div className="App">
            <div className="ToDoInput">
                <h1 className="list-title">Add your Task</h1>
                <ToDoInput />
            </div>
            <div className="ToDoList">

                <h1 className="list-title">Available task toDo</h1>
                <ToDoList />
            </div>
        </div>
    );
}

export default App;
