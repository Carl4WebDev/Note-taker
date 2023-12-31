import React, { useDebugValue } from 'react'


export const ShowTask = ({taskList, setTaskList, task,setTask}) => {

    const handleDeleteAll = () => {
        setTaskList([])
    }

    const handleEdit = (id) => {
        const selectedTask = taskList.find(task => task.id === id)
        setTask(selectedTask)  
        
    }
    
    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(task => task.id !== id)
        setTaskList(updatedTaskList)
    }


  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>ToDO</span>
                <span className='count'>{taskList.length}</span>
            </div>

            <button className='clearAll' onClick={handleDeleteAll}>Clear All</button>
        </div>
        <ul>
            {taskList && taskList.map((task) => {
                return (
                    <li key={task.id}>
                        <p>      
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i className='bi bi-pencil-square' onClick={() => handleEdit(task.id)}></i>
                        <i className='bi bi-trash' onClick={() => handleDelete(task.id) }></i>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
