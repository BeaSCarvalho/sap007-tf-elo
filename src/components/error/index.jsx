import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import PropTypes from 'prop-types';

HandlingErrors.propTypes = {
  className: PropTypes.string,
  classNameError: PropTypes.string,
  errorCode: PropTypes.string
};

function HandlingErrors( props ){
  
  const messageErrors = {
    "404" : "Não foi retornado nenhum resultado.",
    "403" : "O Limite de consultas a API do GitHub foi alcançado"
  }

  if(!messageErrors[props.errorCode]){
    messageErrors[props.errorCode] = 'Não foi encontrado resultados.'
  }

  return (
    <div className={props.className}>
      <ErrorIcon  sx={{ color: "#4F41A6", width: "60%", height: "60%" }} />
      <p className={props.classNameError}>{messageErrors[props.errorCode]}</p>
    </div>
  
  )
}

export default HandlingErrors;
