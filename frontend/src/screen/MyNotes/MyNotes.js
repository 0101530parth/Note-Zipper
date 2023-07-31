import React,{useEffect,useState} from 'react'
import { Accordion,Badge, Button, Card } from "react-bootstrap";
import {Link} from"react-router-dom";
import MainScreen from '../../components/MainScreen';
import axios from 'axios';
const MyNotes = () => {
const [notes,setNotes] = useState([]);
  const deleteHandler = (id) =>{
    if(window.confirm("Are you sure?")) {

    }
  };
  const fetchNotes =async()=> {
      const {data} = await axios('/api/notes');
      setNotes(data);
  };
  console.log(notes);
useEffect(()=>{
fetchNotes();
},[])
  return (
    <div>
      <MainScreen title ="welcome back parth Jaiswal.." children="Test" >My Notes</MainScreen>
    <Link to ="createnote">
      <Button style ={{marginLeft: 10,marginBottom:10,}}size="lg">
        Create New Note
      </Button>
        
    </Link>
      {
        notes.map(note=>(
          <Accordion >
<Card style ={{ margin :10}}>
          <Card.Header style={{ display:'flex'}}>
            <span
            style ={{
            color:"black",
            textDecoration:"none",
            flex:1,
            cursor:"pointer",
            alignSelf:"center",
            fontsize:18,
  
            }}
            >
              

              <Accordion.Item
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                    <Accordion.Header>     {note.title}</Accordion.Header>
                    </Accordion.Item>
               

              </span>
           
            <div>
            <Button href ={`/note/${note._id}`}>Edit</Button>
            <Button varient ="danger" className ="mx-2" onClick={()=>deleteHandler(note._id)}>Delete</Button>
            </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">

            <Card.Body>

              <h4>
                <Badge varient ="success" >Category - {note.category}</Badge>
              </h4>
           <blockquote className ="blockquote mb-0">
            <p>{note.content}</p>
            <footer className ="blockquote-footer">
              Created On - data
            </footer>
           </blockquote>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
          </Accordion>
          
        ))
      }
   
    <Card.Body>India</Card.Body>
    </div>
  )
}

export default MyNotes;
