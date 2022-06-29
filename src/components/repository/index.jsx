import React from "react";
import PropTypes from 'prop-types';
//import styles from './repository.module.css'

  Repository.propTypes = {
    name: PropTypes.string,
    htmlUrl: PropTypes.string,
    description: PropTypes.string,
    homepage: PropTypes.string,
    stargazersCount: PropTypes.number,
    language: PropTypes.string,
    forksCount: PropTypes.number,
    key: PropTypes.number
  };


function Repository( props ) {

  <ul className='repos-list' key={props.key}>
    <li>{props.name}</li>
    <li>{props.htmlUrl}</li>
    <li>{props.description}</li>
    <li>{props.homepage}</li>
    <li>{props.stargazersCount}</li>
    <li>{props.forksCount}</li>
    <li>{props.language}</li>
  </ul>
}

export default Repository;
