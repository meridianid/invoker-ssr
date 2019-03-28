import styles from './index.scss'
import React from 'react'
import NoSSR from 'react-no-ssr'
import cx from 'classnames'

const Home = () => {

  let names = [
    "Simba",
    "Masbul",
    "Cakep",
    "Cakep Jr.",
    "Tompel",
    "Kirana",
    "Bocil",
    "Socky",
    "Kecap",
    "Tilil",
    "Betty",
  ]

  let [title, setTitle] = React.useState(names[ Math.floor(Math.random() * Math.floor(names.length - 1)) ]);

  const randomName = () => {
    setTitle( names[ Math.floor(Math.random() * Math.floor(names.length - 1)) ] )
  }

  return (
    <div>
      <h1 className={styles.title}>
        hi, there { title }
      </h1>
      <button onClick={randomName}>Random cat</button>
      <NoSSR>
        <h2>
          The title should be red
        </h2>
      </NoSSR>
    </div>
  )
}

export default Home;