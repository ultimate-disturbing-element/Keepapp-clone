import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note=(props)=>{

    const deleteNote=()=>{
      props.deleteItem(props.id);
    }
    return(
    <>
    <div style={{marginTop:"10%"}}>
    <div style={{height:'125px',width:'220px',
  backgroundColor: '#f4f4f4',
  boxShadow: '5px 5px 25px -5px rgba(0, 0, 0, 0.5)',
  borderRadius: '15px',marginLeft:"20px",float:"left",marginTop:"10%"
  }}>
     <h1 style={{marginLeft:"10px",}}>
     {props.title}
     </h1>
     <p style={{marginLeft:"10px",}}>{props.content}</p>
     <button onClick={deleteNote} style={{  backgroundColor: 'white',
  borderColor:"white",
  borderRadius: '40%' ,margin:"2px"}}><DeleteIcon style={{color:"red"}}/></button>

         </div>
         </div>

    </>
    )
};

export default Note;