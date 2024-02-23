import styles from './style';
import React from 'react'

import {Navbar, Hero} from './components';

const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    <Navbar />

    <Hero />
  </div>
);

export default App