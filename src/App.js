import './css/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import {Routes, Route} from'react-router-dom';
import {useState, useEffect} from 'react';
import {v4 as uuidv4 } from 'uuid';

import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
 const [technos, setTechnos] = useState([]);
 
 const STORAGE_KEY = 'technos';
 const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

 // On first App component mount
 useEffect(() => {
  setTechnos(storedTechnos); 
  console.log('useEffect with []');
 }, []);

 // on every technos change
useEffect(() =>{
  setStoredTechnos(technos);
  console.log('useEffect with [technos]');
}, [technos]);


 function handleAddTechno(techno){
  console.log('handleAddTechno', techno);
  setTechnos([...technos, {...techno, technoid: uuidv4()}]) ;
 }

 function handleDeleteTechno(id){
  setTechnos(technos.filter((tech)=> tech.technoid !== id));
 }

  return (
    <> 
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />}/>
        <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno}/>}/>
      </Routes>
   </>
    );
}

export default App;
