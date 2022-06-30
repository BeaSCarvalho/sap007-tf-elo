import React from "react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HandlingErrors from "../../components/error"
import { getUser, getRepository } from "../../service_data/services"
import InputSearch from "../../components/input";
import Profile from "../../components/profile";
import styles from "./results.module.css"
import Header from "../../components/header"
import iconFork from "../../img/gitfork.png"

PageResults.propTypes = {
  searchedUser: PropTypes.string,
  setSearchedUser: PropTypes.func
};

function PageResults(props) {
  const [errorRepos, setErrorRepos] = useState(false)
  const [error, setError] = useState(false)
  const [apearUsers, setApearUsers] = useState(false)
  const [apearRepos, setApearRepos] = useState(false)
  const [infosUser, setInfosUser] = useState({})
  const [reposInfos, setReposInfos] = useState([])

  console.log(apearUsers, apearRepos, error, errorRepos)

  useEffect(() => {
    if (props.searchedUser !== "" && props.searchedUser !== null && props.searchedUser !== undefined) {
      setUser(props.searchedUser);
    } else {
      setError(false);
    }
  }, [props.searchedUser])

  async function setUser(valueTyped) {
    try {
      const response = await getUser(valueTyped);
      if (response.data) {
        const infos = response.data;
        console.log(infos);
        setError(false);
        setInfosUser(infos);
        setApearUsers(true);
        setRepositories(valueTyped);
      }
    } catch (error) {
      console.log(error);
      setApearUsers(false);
      setError(true);
      setApearRepos(false);
      setErrorRepos(false)
    }
  }

  async function setRepositories(valueTyped) {
    try {
      const response = await getRepository(valueTyped);
      console.log(response.data);
      const allRepos = response.data;
      setErrorRepos(false);
      setReposInfos(allRepos);
      setApearRepos(true);
    } catch (error) {
      console.log(error);
      setApearRepos(false);
      setErrorRepos(true);
    }
  }

  const handleChange = (e) => {
    props.setSearchedUser(e.target.value.trim());
  }

  return (
    <div className={styles.container}>
      <Box>
        <Grid>
          <Header />
          <div className={styles.divInput}>
            < InputSearch onChange={(e) => handleChange(e)} disableButton={true} />
          </div>

          <main className={styles.main}>
            {
              apearUsers && error === false ?
                <Profile user={infosUser} /> : null
            }
            {!error && !apearUsers ? <p className={styles.error}>Pesquise algo</p> : null}
            {error ? <HandlingErrors className={styles.divError} classNameError={styles.error} /> : null}
            {apearUsers && !error && apearRepos && !errorRepos ?
              <section className={styles.containerRepo}>
                {reposInfos.map((item) => {
                  return (
                    <ul key={item.id} className={styles.reposCard}>
                      <li className={styles.liName}>Nome: {item.name}</li>
                      <li className={styles.li}><a href={item.html_url}>Link de acesso</a></li>
                      <li className={styles.liDescription}>Descrição: {item.description}</li>
                      <div className={styles.cardIcons}>
                        <li className={styles.li}><a href={item.homepage}>Link do deploy</a></li>
                        <li className={styles.li}><StarIcon sx={{ color: "#FAC100", fontSize: 30 }} />{item.stargazers_count}</li>
                        <li className={styles.li}><img src={iconFork} alt="icon Fork Github" className={styles.iconFork}></img>{item.forks_count}</li>
                      </div>
                      <li className={styles.liLanguages}>Linguagem mais utilizada: {item.language}</li>
                    </ul>
                  )
                })}
              </section>
              :
              null
            }
          </main>
        </Grid>
      </Box>
    </div>
  );
}

export default PageResults;