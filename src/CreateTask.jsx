import React, { useState } from 'react'

export default function CreateTask(props) {

  const [task,setTask] = useState({
    title:"",
    content:"",
  });

  function detectTask(event){
    // console.log(event.target.value);
      
    const {name,value} = event.target;

    setTask((prevTask)=>{
      return{
        ...prevTask,
        [name]:value,
      }
    })
  };


  function submitTask (event){
    props.onAdd(task);
    setTask({
      title:"",
      content:"",
    })
    event.preventDefault();
  }



  return (
    <div className='todoDivArea'>
        <form className='todoDiv' >
          <input type="text"
          className='form-control todoText mb-3'
          name='title'
          onChange={detectTask}
          value={task.title}
          placeholder='Başlık'/>

          <textarea 
          name="content" 
          value={task.content}
          onChange={detectTask}
          className='form-control todoText mb-3'
           rows={3}
           placeholder='İşinizi yazınız'
           ></textarea>

           <button className='btn btn-primary  todoButton' onClick={submitTask} >Ekle</button>
        </form>
    </div>
  )
}
