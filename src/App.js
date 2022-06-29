import React from 'react';
import { getUser, test } from "./service_data/services.js";

function App() {
  
  getUser("octo").then((response) => response.json()).then((response) => console.log(response))
  
  async function getInfos () {
    try {
      const response = await test();
      return console.log(response)
    } catch (error) {
      return console.log(error)
    }
  }

  getInfos()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Oi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
