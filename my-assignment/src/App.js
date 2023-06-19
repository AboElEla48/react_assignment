import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

function App() {
  return (
    <div className="App">

      <UserInput />
      <UserOutput userName ='Hamada'/>
      <UserOutput userName ='Hamada'/>
      <UserOutput userName ='Hamada'/>

    </div>
  );
}

export default App;
