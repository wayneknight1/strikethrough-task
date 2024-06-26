import React from 'react'
import { useState } from 'react'
function Modal({onClose, onAdd}) {
    const [task,setTask] = useState({name:'', strike:false})
    const [status,setStatus] = useState(false)
  return (
    <div className='outer-container'>
        <div className='inner-container'>
            <button onClick={onClose} className='exitButton'>Exit</button>
            <input onChange={e => setTask({...task, name: e.target.value})} value={task.name} placeholder='Enter Task'/>
            <input placeholder='completion status' onChange={e => {
                if(e.target.value === 'Completed'){
                    setTask(task => {
                        return {...task, strike: true}
                    })
                }
                else
                    setTask(task =>{return  {...task, strike: false}})
            }}/>
            <button onClick={() => onAdd(task)}>Submit</button>  
        </div>
    </div>
  )
}

export default Modal