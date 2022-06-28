import React from "react";
import photography from "../../img/photography.gif"
import InputSearch from "../../components/input";
import styles from "./home.module.css"


function Home() {
    return (
        <div className={styles.container}>
            <img src={photography} alt="Logo Finder Github" className={styles.gif}></img>
            < InputSearch />
            <h1> PLATAFORMA  (PER)FEITA PARA ENCONTRAR Devs DE TODOS OS LUGARES!</h1>
            <p> Aqui, você pode buscar por novas parcerias ou simplesmente conhecer o trabalho de outros desenvolvedores.</p>

        </div>
    )
}

export default Home