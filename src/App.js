import React from 'react';
import Home from "./pages/home"
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
      </header>
      < Home />
    </div>
  );
}

export default App;
