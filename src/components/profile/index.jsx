import React from "react";
import PropTypes from 'prop-types';
//import styles from './profile.module.css'
Profile.propTypes = {
    user: PropTypes.object
};

function Profile( props ) {
  
  return (
    <section className='results-container'>
      <div className='user-card'>
        <img src={props.user.avatar_url} alt={props.user.username + 'photo'} />
        <p>Username: {props.user.login !== null ? props.user.login : "não preenchido"}</p>
        <p>{props.user.name}</p>
        <a href={props.user.html_url}>Link para o perfil no GitHub.</a>
        <p>{props.user.bio !== null ? props.user.bio : "não preenchido"}</p>
        <p>Seguidores: {props.user.followers.toString()}</p>
        <p>Seguindo: {props.user.following.toString()}</p>
        <p>Repositórios públicos: {props.user.public_repo.toString()}</p>
        <p>Compania: {props.user.company !== null ? props.user.company : "não preenchido"}</p>
        <p>{props.user.blog !== null ? props.user.blog : "não preenchido"}</p>
        <p>{props.user.location !== null ? props.user.location : "não preenchido"}</p>
        <p>{props.user.email !== null ? props.user.location : "não preenchido"}</p>
        <p>{props.user.hireable !== null ? props.user.location : "não preenchido"}</p>
        <p>{props.user.twitter_username !== null ? props.user.location : "não preenchido"}</p>
      </div>
    </section>
  )
}

export default Profile;
