import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {  

   
   const navigate = useNavigate (); 
   const [access, setAccess] = useState (false);
   const EMAIL = "abc123@gmail.com"
   const PASSWORD = "abc123"
   
   useEffect (()=> {
      !access && navigate ("/"); 
   }, [access]); 

   const location = useLocation (); 
   let [characters, setCharacters] = useState([]); 



   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersfiltered = characters.filter (character => character.id !== Number(id))
      setCharacters (charactersfiltered)
      
   }

   const login = (userData) => {

      if (userData.email === EMAIL && userData.password === PASSWORD ) {
       setAccess(true); 
       navigate ("/home"); 
      } else {
         alert ("Credenciales incorrectas")
      }
   }

  
   


   return (
      <div className='App'>

         {location.pathname !== "/" && (<Nav onSearch={onSearch}/>)}
               
         <Routes>

            <Route path='/' element={<Form login = {login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>

         </Routes>

      </div>
   );
}

export default App;
