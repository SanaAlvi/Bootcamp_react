import React, {useState} from 'react';

import Change from './Changer.js'
function App() {

  let [Value,ValueSet] = useState(0)
  let [Message,setMessage]= useState(true)

  return (
    <div className="App-header">
  
        <p>
          Welcome from Sana Alvi
        </p>
        <Change Changer= {Value} />
        <button onClick={() => ValueSet(Value + 1)}>Chlick Me</button>
        <button onClick={ () => ValueSet(Value = 0)}>Reset Me</button>
  <h1>Hello {Message ? "You are Right" : "You may be Wrong"}</h1>
      <button onClick={() => setMessage=(!setMessage)}>Change Message</button>
 
    </div>
  );
}
export default App;