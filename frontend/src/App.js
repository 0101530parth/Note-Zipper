
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from './screen/LandingPage/LandingPage';
import MyNotes from './screen/MyNotes/MyNotes';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const App=()=>{
  return (
   <>
   <BrowserRouter>
   <Header/>
   
   <main>
   <Routes>
    <Route path="/mynotes" element={<MyNotes/>}  />
    <Route path="/" element={<LandingPage/>} exact />  
   </Routes>
   </main>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App;
