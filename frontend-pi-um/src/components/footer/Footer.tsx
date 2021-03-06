import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './Footer.css';

export default function Footer(){
  const styles = useStyles()
  
  return (
    <footer className={styles.footer}>
      <NavLink to="/" className={styles.paragraph}>
        INÍCIO
      </NavLink>
      <NavLink to="/donations" className={styles.paragraph}>
        DOAÇÕES
      </NavLink>
      <NavLink to="/signup" className={styles.paragraph}>
        CADASTRO
      </NavLink>
      <NavLink to="/contact" className={styles.paragraph}>
        CONTATO
      </NavLink>
      <NavLink to="/login" className={styles.paragraph}>
        LOGIN
      </NavLink>
    </footer>
  )
}