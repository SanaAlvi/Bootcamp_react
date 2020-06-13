import React, {useState} from 'react';

import Change from './Changer.js'
function App() {

  let [Value,ValueSet]= ValueSet()

  return (
    <div className="App">
  
        <p>
          Welcome from Sana Alvi
        </p>
        <Change Changer= {Value} />
 
    </div>
  );
}
export default App;