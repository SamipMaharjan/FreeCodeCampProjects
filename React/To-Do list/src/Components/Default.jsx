import React, { useState } from 'react'

export default function Default(props) {
  // CSS 
  let textStyles = {
      height: '30px',
      width: '100%',
      backgroundColor: 'white',
      color: 'black',
  }

  let tasksStyles = {
    display: 'flex',
    alignItems: 'center',
  }
  
  let checkboxStyles = {
      margin: '10px 15px 10px 10px',
  }

  let paragraphStyles = {
    margin: 0,
  }
//  CSS 


  // Storing the text written in input to the todoInput. 
  let storingVariable = (event) => {
    console.log("Storing varibale.")
      setTodoInput(event.target.value);
      console.log(todoInput);
  }


  // Setting the task in the todo list to the input text 
  let addList = () => {
      setTaskName(todoInput);
    }

    // For setting the task name 
  const [taskName, setTaskName] = useState("No tasks");

  // For storing the text written in the input 
  const [todoInput, setTodoInput] = useState("Samip");


  return (
    <>
      <div className="">
      <div className="mb-3">

            {/* Task Section  */}
            <div className="tasks" style={tasksStyles}>
              <input type="checkbox" style = {checkboxStyles}/>
              <p style = {paragraphStyles}>{taskName}</p>
              {/* {taskVariable} */}

            </div>

            {/* Input SEction  */}
            <div className="input">
              <input type="text" placeholder="Enter your text" onChange={storingVariable} style={textStyles}/>

              <button type="button" className="btn btn-secondary"  onClick={addList} >Add</button>
            </div>
        </div>
      </div>
    </>
  )
}
