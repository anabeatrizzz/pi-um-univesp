import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import clsx from 'clsx';
import useStyles, { paperProps } from './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export default function Header() {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // function handleNavLinkClick(event: MouseEvent<HTMLElement>){
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // }

  function handleCloseMenu(){
    setAnchorEl(null);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/pi-um-univesp/frontend-pi-um">
        <img
          src={Logo}
          alt="obra social logo"
          width={100}
          height={100}
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <NavLink className={styles.navLink} to="/pi-um-univesp/frontend-pi-um">
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

          <NavLink className={styles.navLink} to="/login">
            <li className={styles.li}>Login</li>
          </NavLink>
        </ul>
      </nav>
      <Menu
        anchorEl={anchorEl}
        open={open}
        PaperProps={paperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
      >
        <MenuItem disableGutters>
          <Link className={styles.typographyLink} to="/your-donations">
            <Typography align="center">Doações cadastradas</Typography>
          </Link>
        </MenuItem>
        <MenuItem disableGutters>
          <Link className={styles.typographyLink} to="/edit-register-data">
            <Typography align="center">Editar dados cadastrais</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </header>
  )
}