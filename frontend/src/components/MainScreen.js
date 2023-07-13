import React from 'react'
import '../components/Screen.css';
import {Row,Container} from 'react-bootstrap';
const MainScreen = ({title,children}) => {
  console.log(children,"here ")
  return (
    <div className ='mainback'>
      <Container>
        <Row>
            <div className ='page'>{
                title && <>
                <h1 className ='heading'>{title}</h1>
                <hr/>
                </>
            }
            {children}

            </div>
        </Row>
      </Container>
    </div>
  )
}

export default MainScreen
