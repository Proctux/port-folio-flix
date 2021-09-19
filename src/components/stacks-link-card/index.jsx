import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const StackLinkCard = ({ link, image, name }) => {
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['card-container']}>
        <img className={styles['card-image']} src={image} alt={name} />
        <Link to={link} className={styles.link} />
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  )
}

StackLinkCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
}

export default StackLinkCard
