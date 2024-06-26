import React, { useState } from 'react'
import Modal from './Modal'

function App() {
    const [tasks,setTasks] = useState([{name: 'Buy Milk',strike: false}, {name: 'Groceries', strike: false}])
    const [modal,setModal] = useState(false)
    function buttonClickHandler(){
        setTasks([])
    }

    const addTask = (newTask) =>{
        setTasks(tasks => [...tasks, newTask])
        setModal(false)
    }
    
    const markCompleteHandler = (name) =>{
        setTasks(current => {
            return current.map(item => {
                if(item.name === name)
                    return {...item, strike: !item.strike}
                return item
            })
        })
    }
    const removeHandler = (task) =>{
        setTasks(tasks => tasks.filter(temp => temp.name !== task.name))
    }
    return (
    <div className='app-container'>
        {modal && <Modal onClose = {() => setModal(false)} onAdd = {addTask}/>}
        {tasks.map(task => {
            return <div key={task?.name + task?.status} className='task-item'>
                <h2 className={task.strike ? 'strike' : ''}>{task?.name}</h2>
                <h3>{task?.strike? 'Completed ' :'Incomplete'}</h3>
                <button className='complete-button' onClick={e => markCompleteHandler(task.name)}>{!task.strike ? "Mark Complete" : "Mark Incomplete"}</button>
                <button className='delete-button' onClick={e => removeHandler(task)}>Delete Task</button>
            </div>
        })}
        <button className ='clear-button' onClick={e => buttonClickHandler()}>Clear All Items</button>
        <button onClick={e => setModal(true)}>Add Task</button>
    </div>
  )
}

export default App