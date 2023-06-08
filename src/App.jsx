import React from 'react';
import styles from './style'
import { Navbar, Articles, Hero, Footer,CV, Medios} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
       <Navbar/>
     <div>
  <Hero/>
  </div>
  <div>
  <CV/>
  </div>
  <div className="h-6 border-l border-black-300 mx-2"/>
  <div>
  <Medios/>
  </div>
  <div>
  <Articles/>
  </div>
  <div>
  <Footer/>
  </div>

    </div>
  );


export default App 