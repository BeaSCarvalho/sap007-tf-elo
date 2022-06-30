import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Paper, IconButton, InputBase } from '@mui/material';
import PropTypes from 'prop-types';
import styles from "./input.module.css";

InputSearch.propTypes = {
    onClick : PropTypes.func,
    onChange : PropTypes.func,
    disableButton: PropTypes.bool
};

function InputSearch (props){
    
    return(
        <div className={styles.input}>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%", height: "60px", backgroundColor: "#4F41A6" }}
            >
                <InputBase   
                    onChange={props.onChange}
                    variant= "filled"
                    sx={{ ml: 1, flex: 1, color: "#fff" }}
                    placeholder="Digite o nome do usuário"
                    inputProps={{ 'aria-label': 'Digite o nome do usuário' }}
                />
                <IconButton type="submit"
                    onClick={props.onClick} sx={{ p: '10px', color: "#fff"}} aria-label="search" disabled={props.disableButton}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default InputSearch;