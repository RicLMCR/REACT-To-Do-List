import { render } from '@testing-library/react';

import './App.css';
import Entries from './components/addEntries.js'

const App = ()=>{

  

  // How to break this up into components. COnsider the following: one component to store the initial temporary value, 1 component to store the overall array, one component to store delete function
  

  return(
    <div className="container">
      <Entries/>
      
    </div>
  )
} //End of App
export default App;

