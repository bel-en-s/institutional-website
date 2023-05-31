import React from 'react';
import styles from './style'
import { Navbar, Articles, Hero, Footer} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
     </div>
     <div>
  <Hero/>
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