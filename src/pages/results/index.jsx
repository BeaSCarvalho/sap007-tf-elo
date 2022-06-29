import React from "react";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

import { getUser, getRepository } from "../../service_data/services"

function PageResults() {
  const [searchedUser, setSearchedUser] = useState("");
  const [error, setError] = useState("")
  const [infosUser, setInfosUser] = useState([])
  const [reposInfos, setReposInfos] = useState([])

  console.log(searchedUser)

//   const handleChange = (e) => {
//     setSearchedUser({
//       ...searchedUser,
//       [e.target.id]: e.target.value
//     })
//     setUser()
//     setRepositories()
//   }

  async function setUser() {
    try {
      const response = await getUser(searchedUser);
      if (response.data) {
        const infos = response.data;
        setInfosUser(infos)
      }
    } catch (error) {
      setError("Erro")
    }
  }

  useEffect(() => {
    setUser()
    setRepositories()
  }, [searchedUser])

  async function setRepositories() {
    try {
      const response = await getRepository(searchedUser);
      console.log(response.data);
      const allRepos = response.data;
      setReposInfos(allRepos)
    } catch (error) {
      console.log(error)
      setError("Outro Erro")
    }
  }

  const nonEmptySearch = searchedUser.username !== "";

  return (
    <div className="App">
      <header className="App-header">
        <p>

        </p>
        <TextField id="username" label="Filled" variant="filled"
          onChange={event => setSearchedUser(event.target.value)}
          defaultValue={searchedUser.name}
        />
      </header>
      <main>
        {nonEmptySearch &&
          <section className='results-container'>
            <div className='user-card'>
              <img src={infosUser.avatar_url} alt={infosUser.username + 'photo'}></img>
              <p>{infosUser.login}</p>
              <p>{infosUser.name}</p>
              <p>{infosUser.html_url}</p>
              <p>{infosUser.bio}</p>
              <p>Seguidores: {infosUser.followers}</p>
              <p>Seguindo: {infosUser.following}</p>
              <p>{infosUser.public_repo}</p>
              <p>{infosUser.company}</p>
              <p>{infosUser.blog}</p>
              <p>{infosUser.location}</p>
              <p>{infosUser.email}</p>
              <p>{infosUser.hireable}</p>
              <p>{infosUser.twitter_username}</p>
              <p>{infosUser.repos_url}</p>
            </div>


            {reposInfos.map((item) => {
              return (
                <ul className='repos-list' key={item.id}>
                  <li>{item.name}</li>
                  <li>{item.html_url}</li>
                  <li>{item.description}</li>
                  <li>{item.homepage}</li>
                  <li>{item.stargazers_count}</li>
                  <li>{item.forks_count}</li>
                  <li>{item.language}</li>
                </ul>
              )
            })}
          </section>
        }

        <p>{error}</p>
      </main>
    </div>
  );
}

export default PageResults;