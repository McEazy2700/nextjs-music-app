import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import styles from './Search.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
        <label className={styles.label} htmlFor="search"><BiSearchAlt /></label>
        <input className={styles.input} type="text" id='search' placeholder='Search for artists and songs'/>
    </div>
  )
}

export default SearchBar