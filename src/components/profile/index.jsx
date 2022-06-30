import React from "react";
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import styles from './profile.module.css'
Profile.propTypes = {
  user: PropTypes.object
};

function Profile(props) {

  return (
    <div className={styles.container}>
      <Grid container 
        sx={{ width: "100%", flexDirection: "column", }}
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <Link href={props.user["html_url"]} underline="hover" target="_blank" rel="noopener" >
            {<Avatar
              alt={props.user.username + 'photo'}
              src={props.user.avatar_url}
              sx={{ width: 200, height: 200 }}
            />}
          </Link>
        </Grid>
        <Grid item sx={{ color: "#D9D9D9", textAlign: "center"}}>
          <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}>
            <Grid item
              sx={{ fontWeight: "bold", fontSize: "1.2em" }}
            >
              <p>Username: {props.user.login !== null ? props.user.login : null}</p>
            </Grid>
            <Grid item>
              <Grid container
                direction="row"
                justifyContent="space-around"
                alignItems="space-around"
              >
                <p className={styles.space}>{props.user.followers} Seguidores</p>
                <p className={styles.space}>{props.user.following} Seguindo</p>
              </Grid>
            </Grid>
            <p>{props.user.name !== null ? props.user.name : null}</p>
            <p>{props.user.bio !== null ? props.user.bio : null}</p>
            <p>Repositórios públicos: {props.user["public_repos"]}</p>
            <p> {props.user.company !== null ? `Trabalho: ${props.user.company}`   : null}</p>
            <p>
              {props.user.blog !== null && props.user.blog !== "" ?
                <Link 
                  href={props.user.blog}
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  color="red" >
                  {`Blog ${props.user.blog}`}
                </Link> :
                null
              }
            </p>
            <p>{props.user.location !== null ? `Mora em: ${props.user.location}` : null}</p>
            <p>{props.user.email !== null ? `E-mail: ${props.user.email}`: null}</p>
            <p>{props.user.hireable !== null ? props.user.hireable : null}</p>
            <p>
              {props.user["twitter_username"] !== null ? 
                <Link 
                  href={props.user["twitter_username"]}
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  color="red" >
                  {`Twitter: ${props.user["twitter_username"]}`}
                </Link> :
                null
              }
              </p>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default Profile;
