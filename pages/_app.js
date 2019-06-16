import React from 'react'
import App, { Container } from 'next/app'

import './../src/base.scss'
import './../src/sass/invoker-layout/grid.module.scss'
import './../src/assets/fonts/fonts.js'

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default CustomApp