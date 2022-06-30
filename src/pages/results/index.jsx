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
  const [codeError, setCodeError] = useState('')
  const handleChange = (e) => {
    props.setSearchedUser(e.target.value.trim());
  }


  useEffect(() => {
    if (props.searchedUser !== "" && props.searchedUser !== null && props.searchedUser !== undefined && props.searchedUser.length !== 0) {
      setUser(props.searchedUser);
    } else {
      setApearUsers(false);
      setError(false);
      setCodeError("");
    }
  }, [props.searchedUser])

  async function setUser(valueTyped) {
    try {
      const response = await getUser(valueTyped);
      if (response.data) {
        const infos = response.data;
        setCodeError("")
        setError(false);
        setInfosUser(infos);
        setApearUsers(true);
        setRepositories(valueTyped);
      }
    } catch (err) {
      setCodeError(`${err.code}`)
      setApearUsers(false);
      setError(true);
      setApearRepos(false);
      setErrorRepos(false)
    }
  }

  async function setRepositories(valueTyped) {
    try {
      const response = await getRepository(valueTyped);
      const allRepos = response.data;
      setCodeError("")
      setErrorRepos(false);
      setReposInfos(allRepos);
      setApearRepos(true);
    } catch(err) {
      setCodeError(`${err.code}`)
      setApearRepos(false);
      setErrorRepos(true);
    }
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
            {!error && !apearUsers ? <p className={styles.search}>Pesquise um usuário.</p> : null}
            {error && !apearUsers ? <HandlingErrors className={styles.divError} classNameError={styles.error} errorCode={codeError} /> : null}
            {apearUsers && !error && apearRepos && !errorRepos ?
              <section className={styles.containerRepo}>
                {reposInfos.map((item) => {
                  return (
                    <ul key={item.id} className={styles.reposCard}>
                      <li className={styles.liName}>Nome: {item.name}</li>
                      <li className={styles.li}><a href={item.html_url} className={styles.a}>Acessar no Github</a></li>
                      <li className={styles.liDescription}>Descrição: {item.description !== null ? item.description : `Sem descrição`}</li>
                      <div className={styles.cardIcons}>
                        <li className={styles.li}><a href={item.homepage} className={styles.a}>Link do deploy</a></li>
                        <li className={styles.li}><StarIcon sx={{ color: "#FAC100", fontSize: 30 }} />{item.stargazers_count}</li>
                        <li className={styles.li}><img src={iconFork} alt="icon Fork Github" className={styles.iconFork}></img>{item.forks_count}</li>
                      </div>
                      <li className={styles.liLanguages}>Linguagem mais utilizada: {item.language !== null ? item.language : `Não especificada`}</li>
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