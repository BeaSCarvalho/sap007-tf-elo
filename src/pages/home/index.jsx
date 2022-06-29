import React from "react";
import logo from "../../img/logo.gif"
import InputSearch from "../../components/input";
import styles from "./home.module.css"
import Footer from "../../components/footer";
import Divider from '@mui/material/Divider';

function Home() {

    return (
        <>
            <div className={styles.container}>
                <img src={logo} alt="Logo Finder Github" className={styles.gif}></img>
                <aside className={styles.aside}>
                    <Divider variant="middle" sx={{ boxShadow: "2px 2px 0.2em grey" }} />
                    < InputSearch onClick={handleSubmit} onChange={event => props.setSearchedUser(event.target.value)}/>
                    <h1> PLATAFORMA <strong className={styles.perfect}>(PER)FEITA</strong> PARA ENCONTRAR Devs DE TODOS OS LUGARES!</h1>
                    <p className={styles.textAbout}> Aqui, você pode buscar por novas parcerias ou simplesmente conhecer o trabalho de outros <strong className={styles.bold}>desenvolvedores</strong>.</p>
                    <Divider variant="middle" sx={{ boxShadow: "2px 2px 0.2em black" }} />
                </aside>
            </div>
            <Footer />
        </>
    )
}

export default Home
