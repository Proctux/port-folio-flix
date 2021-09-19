import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <section className={styles['home-container']}>
      <h1>What of my stacks portfolios you'd like to have a look at?</h1>
      <div className={styles['stacks-container']}>
        <Link to="/web">Web</Link>
        <Link to="/mobile">Mobile</Link>
        <Link to="/backend">Backend</Link>
      </div>
    </section>
  )
}

export default Home
