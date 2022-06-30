import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import PropTypes from 'prop-types';

HandlingErrors.propTypes = {
  className: PropTypes.string,
  classNameError: PropTypes.string
};

function HandlingErrors( props ){
  
  return (
    <div className={props.className}>
      <ErrorIcon  sx={{ color: "#4F41A6", width: "60%", height: "60%" }} />
      <p className={props.classNameError}>Não foi retornado nenhum resultado.</p>
    </div>
  
  )
}

export default HandlingErrors;