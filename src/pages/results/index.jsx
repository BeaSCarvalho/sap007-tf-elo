import React from "react";
import Profile from "../../components/profile";
import Repository from "../../components/repository";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import PropTypes from 'prop-types';

import { getUser, getRepository } from "../../service_data/services"

PageResults.propTypes = {
  setSearchedUser: PropTypes.func
};

function PageResults(props) {
  const [username, setUsername] = useState("");
  //const [error, setError] = useState("")
  const [infosUser, setInfosUser] = useState([])
  const [reposInfos, setReposInfos] = useState([])

  // useEffect(() => {
  //   props.setSearchedUser(searchedUser)
  // }, [])

  // useEffect(() => {
  //   setUsername
  // })

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
      const response = await getUser(username);
      if (response.data) {
        const infos = response.data;
        setInfosUser(infos)
      }
    } catch (error) {
      //setError("Erro")
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(username)
    setUser()
    setRepositories()
  }, [username])

  async function setRepositories() {
    try {
      const response = await getRepository(username);
      console.log(response.data);
      const allRepos = response.data;
      setReposInfos(allRepos)
    } catch (error) {
      console.log(error)
      //setError("Outro Erro")
    }
  }

  const nonEmptySearch = username !== "";

  return (
    <div className="App">
      <header className="App-header">
        <p>

        </p>
        <TextField id="username" label="Filled" variant="filled"
          onChange={event => setUsername(props.setSearchedUser(event.target.value))}
          value={username}
        />
      </header>
      <main>
        {nonEmptySearch &&
          <section>
            <Profile user={infosUser} />
            {reposInfos.map((item) => {
              return (
                <Repository key={item.id} name={item.name} htmlUrl={item.html_url} 
                  description={item.description} homepage={item.homepage} 
                  stargazersCount={item.stargazers_count} 
                  forksCount={item.forks_count} language={item.language}
                />
              )
            })}
          </section>
        }
      </main>
    </div>
  );
}

export default PageResults;