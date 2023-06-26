import React from 'react';
import styles from './style'
import { Route, Routes } from "react-router-dom"
import { Navbar, Articles, Hero, Footer,CV, Medios} from './components';
import Publicaciones from './components/pages/Publicaciones';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
       <Navbar/>
    
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
        </Routes>
      </div>
  );


export default App 