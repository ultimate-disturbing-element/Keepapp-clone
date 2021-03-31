import React,{useState} from 'react';
import CreateNote from './CreateNote.jsx';
import Header from './Header.jsx';
import Note from './Note.jsx';


const App=()=>{
  const [addItems, setItems] = useState([ ])
  const addNote=(note)=>{
   setItems((prevData)=>{
     return[
       ...prevData,note
     ]
   })
  }
  const onDelete=(id)=>{
    setItems((prevData)=>{
      return prevData.filter((currData,indx)=>{
        return indx !== id;
      })
    })
  }
  return (
  <>
   <Header/>
   <br/>
   <br/>
  <CreateNote passNote={addNote}/>
  {addItems.map((val,index)=>{
    return <Note 
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
    />
  })}
 
  </>
  );
}
export default App;
