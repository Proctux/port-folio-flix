import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import PortFolioFlix from 'assets/images/portfolioflix.png'
import { useLocation } from 'react-router'
import { APP_PATHNAME } from 'utils/constants'

const navOptions = Object.values(APP_PATHNAME).filter(navItem => navItem.name !== APP_PATHNAME.HOME.name)

const Header = () => {
  const { pathname } = useLocation()
  console.log(navOptions)

  return (
    <header className={styles['header-container']}>
      <Link to={APP_PATHNAME.HOME.path} className={styles['home-link']}>
        <img src={PortFolioFlix} alt="The website logo" className={styles['port-logo']}/>
      </Link>
      {pathname !== APP_PATHNAME.HOME.path && (
        <nav className={styles['nav-container']}>
          {navOptions.map(navItem => (
            <Link key={navItem.name} to={navItem.path} className={styles['nav-item']}>{navItem.name}</Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
