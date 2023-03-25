
import './App.css';
import Header from "./componenets/Header";
import Home from './componenets/Home';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Contact from './componenets/Contact';
import About from './componenets/About';

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
   
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
</Routes>

    </BrowserRouter>
  );
}

export default App;
