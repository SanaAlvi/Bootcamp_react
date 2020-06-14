import React, {useState} from 'react';

import Change from './Changer.js'
function App() {

  let [Value,ValueSet] = useState(0)
  let [Message,setMessage]= useState(true)

  return (
    <div className="App">
  
        <p>
          Welcome from Sana Alvi
        </p>
        <Change Changer= {Value} />
        <button onClick={() => ValueSet=(Value+1)}>Chlick Me</button>
  <h1>Hello {setMessage ? 'You are Right' : 'You may Wronge'}</h1>
      <button onClick={() => Message=(!Message)}>Change Message</button>
 
    </div>
  );
}
export default App;