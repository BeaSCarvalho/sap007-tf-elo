import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Paper, IconButton, InputBase } from '@mui/material';
import styles from "./input.module.css";

function InputSearch (){
    return(
        <div className={styles.input}>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    variant= "filled"
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Digite o nome do usuário"
                    inputProps={{ 'aria-label': 'Digite o nome do usuário' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default InputSearch