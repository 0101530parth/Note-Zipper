import React from 'react'
import { Button,Card } from 'react-bootstrap';
import {Link} from"react-router-dom";
import MainScreen from '../../../components/MainScreen';
import notes from "../../backend/data/notes";
const MyNotes = () => {
  return (
    <div>
      <MainScreen title ="welcome back parth Jaiswal.." children="Test" >My Notes</MainScreen>
    <Link to ="createnote">
      <Button style ={{marginLeft: 10,marginBottom:10,}}size="lg">
        Create New Note
      </Button>
      {
        notes.map(note=>(
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
            >{note.title}</span>
            </Card.Header>
            <Button>Edit</Button>
            <Button varient ="danger" className ="mx-2">Delete</Button>
        </Card>
        ))
      }
     
    </Link>
    <Card.Body>India</Card.Body>
    </div>
  )
}

export default MyNotes;
