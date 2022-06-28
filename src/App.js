import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import { getUser, getRepository } from './service_data/services.js';

function App() {

  const [searchedUser, setSearchedUser] = useState({
    username:"",
  });
  const [infosUser, setInfosUser] = useState([])
  //const [reposInfos, setReposInfos] = useState([])

  console.log(searchedUser)
  
  const handleChange = (e) => {
    setSearchedUser({
      ...searchedUser,
      [e.target.id]: e.target.value
    })
    async function setUser() {
      try {
        const response = await getUser(searchedUser.username);
        console.log(response.data)
        const user = {
          photo: response.data.avatar_url,
          username: response.data.login,
          followers: response.data.followers,
          following: response.data.following,
          //repos_url: response.data
        }
        setInfosUser(user)
      } catch (error) {
        return console.log(error)
      }
    }
    setUser()
  }

  // useEffect(() => {
  //   async function setUser() {
  //     try {
  //       const response = await testForAuth(searchedUser.username);
  //       const data = await response.json();
  //       console.log(data)
  //     } catch (error) {
  //       return console.log(error)
  //     }
  //   }
  //   setUser()
  // }, [])  

  // useEffect(() => {
  //   async function repositories() {
  //     try {
  //       const response = await getRepository(searchedUser.username);
  //       const data = await response.json();
  //       console.log(data)
  //     } catch (error) {
        
  //     }
  //   }
  //   repositories() 
  // },[])

  const nonEmptySearch = searchedUser.username !== '';

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Oi
        </p>
        <TextField id="username" label="Filled" variant="filled" onChange={handleChange} value={searchedUser.name}
           InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <PersonSearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </header>
      <main>
        {nonEmptySearch &&
          <section className='results-container'>

            <div className='user-card'>
              <img src={infosUser.photo} alt={infosUser.username + 'photo'}></img>
              <p>{infosUser.username}</p>
              <p>Seguidores: {infosUser.followers}</p>
              <p>Seguindo: {infosUser.following}</p>
            </div>

            <div className='repos-card'>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </section>
        }  
      </main>
    </div>
  );
}

export default App;
