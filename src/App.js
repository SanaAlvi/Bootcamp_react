import React, {useState} from 'react';

import Change from './Changer.js'
function App() {

  let [Value,ValueSet] = useState(0)

  return (
    <div className="App">
  
        <p>
          Welcome from Sana Alvi
        </p>
        <Change Changer= {Value} />
        <button onClick={() => Value=(ValueSet+1)} />
 
    </div>
  );
}
export default App;