import React from 'react';
import styles from './style'
import {Navbar} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
     </div>
    

     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       hero
      </div>
    </div>

    <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      docencia
      entrevistas 
      articulos
      </div>
    </div>


    </div>
  );


export default App 