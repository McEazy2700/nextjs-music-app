import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import styles from './Search.module.scss'
import Gstyles from '../../../styles/Universal.module.scss'

interface Classes{
  classes: string;
}

const SearchBar = () => {
  const [classes, setClasses] = useState<string>(styles.searchBar)
  const inputFocusHandler = ()=>{
    setClasses(curr => `${curr} ${Gstyles.shadow}`)
  }

  const inputBlurHandler = ()=>{
    setClasses(styles.searchBar)
  }
  
  return (
    <div className={classes}>
        <label className={styles.label} htmlFor="search">
          <button className={styles.button} type="submit">
            <BiSearchAlt />
          </button>
        </label>
        <input onFocus={inputFocusHandler} 
        onBlur={inputBlurHandler}
        className={styles.input} type="text" id='search' placeholder='Search for artists and songs'/>
    </div>
  )
}

export default SearchBar