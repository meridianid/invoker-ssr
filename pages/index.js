import styles from './index.scss'
import React from 'react'
import NoSSR from 'react-no-ssr'
import cx from 'classnames'

import Brand from './../components/Brand/Brand'
import Text from '../components/Text/Text';
import Logo from '../components/Logo/Logo';

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

  let initialName = names[ Math.floor(Math.random() * Math.floor(names.length - 1)) ];
  let [title, setTitle] = React.useState(initialName);

  const randomName = () => {
    setTitle( names[ Math.floor(Math.random() * Math.floor(names.length - 1)) ] )
  };

  return (
    <div className={cx(styles.root)}>
      <span style={{fontSize: '96px'}}>🔥</span>
      <Text display3 component="h1" className={cx(styles.title)}>
        hi, there {title}
      </Text>
      <button className={cx(styles.button)} onClick={randomName}>Random cat</button>
      <NoSSR>
        <Text heading3 component="h2" style={{marginBottom: '24px'}}>
          View the page-source to see the action  👀
        </Text>
        <Logo style={{ width: '120px' }} />
      </NoSSR>
    </div>
  )
}

export default Home;