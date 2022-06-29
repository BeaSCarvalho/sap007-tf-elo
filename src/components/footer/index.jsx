import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import styles from "../footer/footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
        <Box sx={{ width: 500, textAlign: "center" }}>

            {'Desenvolvido por: '}
            <Link href="https://github.com/BeaSCarvalho" underline="hover" target="_blank" rel="noopener" color="#fff" padding="10px 3px" >
                {'Beatriz,'}
            </Link>
            <Link href="https://github.com/MonicaGuimaraes" underline="hover" target="_blank" rel="noopener" color="#fff" padding="10px 3px">
                {'Mônica,'}
            </Link>
            <Link href="https://github.com/taizesantos/" underline="hover" target="_blank" rel="noopener" color="#fff" padding="10px 3px">
                {'Taize,'}
            </Link>
            <Link href="https://github.com/Tati-Mendonca" underline="hover" target="_blank" rel="noopener" color="#fff" padding="10px 3px">
                {'Tatiane &'}
            </Link>
            <Link href="https://github.com/WayraArendartchukCastro" underline="hover" rel="noopener" target="_blank" color="#fff" padding="10px 3px">
                {'Wayra.'}
            </Link>
        </Box>
        </div>
    );
}