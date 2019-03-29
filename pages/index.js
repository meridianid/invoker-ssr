import styles from './index.scss'
import React from 'react'
import NoSSR from 'react-no-ssr'
import cx from 'classnames'

import Brand from './../components/Brand/Brand'
import Text from '../components/Text/Text';

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
  };

  return (
    <div>
      <Brand />
      <Text display3 component="h1" className={cx(styles.title)}>
        hi, there {title}
      </Text>
      <button onClick={randomName}>Random cat</button>
      <NoSSR>
        <h2 className={cx(styles.subtitle)}>
          The title should be red
        </h2>
      </NoSSR>
    </div>
  )
}

export default Home;