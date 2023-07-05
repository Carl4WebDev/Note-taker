import React, { useState } from 'react'

export const AddTask = ({taskList, setTaskList,task,setTask}) => {

  const [error, setError] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id) {
      const date = new Date()

      const updateTask = taskList.map((todo) => {
        return (
          todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`} : todo

        )
      })
      setTaskList(updateTask)
      setTask({})

    } else {

      try {
  
        if(e.target.task.value == '') {
          throw new Error('Invalid Task!')  
        } 
      } catch(error) {
        alert(error.message)
      }
  
      const date = new Date()
  
      let newTask = {
        id: date.getTime(), 
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}` 
  
      }
  
      setTaskList([...taskList, newTask])
      setTask({})

    }
  }


  return (
    <div>
        <section className='addTask'>
            <form onSubmit={handleSubmit} >
                <input type='text' name='task' value={task.name || ''} onChange={(e) => setTask({...task, name: e.target.value})} autoComplete='off' placeholder='add task'/>
                <button type='submit' >{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    </div>
  )
}
