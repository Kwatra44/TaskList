import React from 'react';
import './App.css';

function App() {

  const [TaskArray, updateTask] = React.useState(["Task1", "Task2"])

  function addTask(){
    updateTask( prevTask => [...prevTask, `Task ${prevTask.length+1}`])
  }

  const Tasklist = TaskArray.map(elt => <p key = {elt} > {elt}</p>)

  return (
    <div>
      <button onClick = {addTask}>Add New Task</button>
        {Tasklist}
 </div>
  );
}

export default App;




