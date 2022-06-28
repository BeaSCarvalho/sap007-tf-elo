import React from 'react';
import { getUser } from "./service_data/services.js";

function App() {
  
async function user (){
  try {
    const response = await getUser();
    let data = 'error'
    if (response.data){
      data = response.data;
    }
    
    console.log(response)
    console.log(data)
  } catch (error) {
    return console.log(error)
  }

}
  
 user()
  
  // async function getInfos () {
  //   try {
  //     const response = await test();
  //     return console.log(response)
  //   } catch (error) {
  //     return console.log(error)
  //   }
  // }

  // getInfos()

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
