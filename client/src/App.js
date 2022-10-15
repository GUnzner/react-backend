
import './App.css';
import ContactForm from './form';
import {useEffect, useState} from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/users").then(
        response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])
  return (
    <div className="App">
      <header className="App-header">
        SCHILDI UII
        <ContactForm/>
         
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
      </header>
    </div>
  );
}

export default App;
