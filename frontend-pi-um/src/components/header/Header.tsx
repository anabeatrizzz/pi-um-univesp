import React from 'react';
import Logo from '../../assets/logo.png';
import clsx from 'clsx';
import useStyles from './Header.css';
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        <img
          src={Logo}
          alt="boa obra logo"
          width={100}
          height={100}
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <NavLink className={styles.navLink} to="/">
            <li className={styles.li}>Início</li>
          </NavLink>
          <li className={clsx(styles.li, styles.pipe)}> | </li>

          <NavLink className={styles.navLink} to="/donations">
            <li className={styles.li}>Doações</li>
          </NavLink>
          <li className={clsx(styles.li, styles.pipe)}> | </li>

          <NavLink className={styles.navLink} to="/signup">
            <li className={styles.li}>Cadastro</li>
          </NavLink>
          <li className={clsx(styles.li, styles.pipe)}> | </li>

          <NavLink className={styles.navLink} to="/contact">
            <li className={styles.li}>Contato</li>
          </NavLink>
          <li className={clsx(styles.li, styles.pipe)}> | </li>

          <NavLink className={styles.navLink} to="#">
            <li className={styles.li}>Login</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}