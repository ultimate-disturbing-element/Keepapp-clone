import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import './index.css';

const CreateNote=(props)=>{

    
  const [note, setNote] = useState({
   title:'',
   content:'', 
  })

  const InputEvent=(event)=>{
    const {value,name}=event.target;
    setNote((prevData)=>{
     return{
      ...prevData,
      [name]:value,
    }
    })
  }

const addNote=()=>{
props.passNote(note);
setNote({
  title:'',
   content:'',
});

};



  return (
    <>
    <center>
     <div className="createnotelabel" style={{height:'100px',width:'220px',
  backgroundColor: '#f4f4f4',
  boxShadow: '5px 5px 25px -5px rgba(0, 0, 0, 0.5)',
  borderRadius: '15px',
  }}>
       <input type="text" placeholder='title' autoComplete="off" autoSave="off" onChange={InputEvent} value={note.title} name='title' style={{margin:"5px"}}/>
       <br/>
       <textarea  placeholder="Enter the Data " columns=" " rows="" onChange={InputEvent} value={note.content} name='content' style={{margin:"5px",paddingLeft:"25px"}}/>
       <button onClick={addNote} style={{  backgroundColor: 'cyan',
  borderColor:"cyan",
  borderRadius: '40%' ,margin:"2px",}} >
  
            <AddIcon />
       </button>
       
            </div>
            </center>


    </>
  );
};
 export default CreateNote;