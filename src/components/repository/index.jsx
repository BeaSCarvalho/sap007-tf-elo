import React from "react";
import PropTypes from 'prop-types';
//import styles from './repository.module.css'

  Repository.propTypes = {
    // name: PropTypes.string,
    // htmlUrl: PropTypes.string,
    // description: PropTypes.string,
    // homepage: PropTypes.string,
    // stargazersCount: PropTypes.number,
    // language: PropTypes.string,
    // forksCount: PropTypes.number,
    repos: PropTypes.object
  };


function Repository( props ) {

  <ul className='repos-list'>
    <li>{props.repos.name}</li>
    <li>{props.repos.htmlUrl}</li>
    <li>{props.repos.description}</li>
    <li>{props.repos.homepage}</li>
    <li>{props.repos.stargazersCount}</li>
    <li>{props.repos.forksCount}</li>
    <li>{props.repos.language}</li>
  </ul>
}

export default Repository;
