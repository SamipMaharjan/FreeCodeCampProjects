import React from 'react'
import { useState } from 'react'
import './stylesForDefualt.css'

export default function Default(props) {

    // For setting the task name 
  const [taskName, setTaskName] = useState([]);

  // For storing the text written in the input 
  const [todoInput, setTodoInput] = useState("Samip");


  // Storing the text written in input to the todoInput. 
  let storingVariable = (event) => {
      setTodoInput(event.target.value);
      console.log(todoInput);
  }

  // Setting the task in the todo list to the input text 
  let addList = () => {
      setTaskName([...taskName, {
        id: taskName.length+1,
        value: `${todoInput}`
      }]);
      setTodoInput("");
    }

  let deleteList = () => {
    setTaskName([]);
  }

  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = (event) => {
    event.preventDefault();
    setDropDown(!dropDown);
  };
  return (
    <>
    <div className="heading">
      <h1>To-do List</h1>
    </div>
      <div className="">

      <div className="mb-3">
            {/* Task Section  */}
            <div className="tasks">
              <ul>
                {
                  taskName.map(item => (
                  <li key={item.id}><input type="checkbox" id={`checkbox-${item.id}`}></input><p> {item.value}</p>
                  <a href="" onClick={handleDropDown} className="editing">
                    <span className='dot'> </span>
                    <span className='dot'> </span>
                    <span className='dot'> </span>
                  </a>
                    {dropDown && (
                      <div className="dropdown">
                        <ul>
                          <li>Edit</li>
                          <li>Delete</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  ))
                } 
              </ul>
            </div>
            <form action="">
              {/* Input Section  */}
              <div className="input">
                <input type="text" placeholder="Enter your text" onChange={storingVariable} value={todoInput}/>

                <button id="button-1" type="button" className="btn btn-secondary"  onClick={addList} >Add</button>
                <button id="button-2" type="button" className="btn btn-secondary"  onClick={deleteList} >Delete all</button>
              </div>
            </form>
        </div>
      </div>
    </>
  )
}
