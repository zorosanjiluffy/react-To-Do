import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setnewTask] = useState("");


    function handleInputChange(e) {

        setnewTask(e.target.value)


    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setnewTask("");
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);


    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }


    }


    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }

    }

    return (

        <div className="todoList">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="addbtn" onClick={addTask}>

                    Add
                </button>
            </div>
            <ol>

                {tasks.map((task, index) =>
                    <li key={index} >
                        <span className="text">{task}</span>
                        <button className="deletebtn" onClick={() => deleteTask(index)}>


                            Delete
                        </button>
                        <button className="movebtn" onClick={() => moveTaskUp(index)}>
                            ☝️
                        </button>
                        <button className="movebtn" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>

    )
}

export default ToDoList;