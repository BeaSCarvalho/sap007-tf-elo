import React from "react";
import logo from "../../img/logo.gif"
import InputSearch from "../../components/input";
import styles from "./home.module.css"
import Footer from "../../components/footer";
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


Home.propTypes = {
    setSearchedUser: PropTypes.func
};

function Home(props) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`../results`)
    }

    return (
        <>
            <div className={styles.container}>
                <img src={logo} alt="Logo Finder Github" className={styles.gif}></img>
                <aside className={styles.aside}>
                    <Divider variant="middle" sx={{ marginBottom: "10%", boxShadow: "2px 2px 0.2em black" }} />
                    <InputSearch onClick={handleSubmit} onChange={event => props.setSearchedUser(event.target.value)} />
                    <h1> PLATAFORMA <strong className={styles.perfect}>(PER)FEITA</strong> PARA ENCONTRAR Devs DE TODOS OS LUGARES!</h1>
                    <p className={styles.textAbout}> Aqui, você pode buscar por novas parcerias ou simplesmente conhecer o trabalho de outros <strong className={styles.bold}>desenvolvedores</strong>.</p>
                    <Divider variant="middle" sx={{ boxShadow: "2px 2px 0.2em black" }} />
                </aside>
            </div>
            <Footer />
        </>
    )
}

export default Home;
