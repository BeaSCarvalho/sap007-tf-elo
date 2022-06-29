import React from "react";
import logo from "../../img/logo.gif"
import InputSearch from "../../components/input";
import styles from "./home.module.css"
// import Divider from '@mui/material/Divider';


function Home() {

    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo Finder Github" className={styles.gif}></img>
            
            <aside className={styles.aside}>
            < InputSearch />
                <h1> PLATAFORMA <strong className={styles.perfect}>(PER)FEITA</strong> PARA ENCONTRAR Devs DE TODOS OS LUGARES!</h1>
                <p className={styles.textAbout}> Aqui, você pode buscar por novas parcerias ou simplesmente conhecer o trabalho de outros <strong className={styles.bold}>desenvolvedores</strong>.</p>
            </aside>
        </div>
    )
}

export default Home
