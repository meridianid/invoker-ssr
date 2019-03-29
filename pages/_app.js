import React from 'react'
import App, { Container } from 'next/app'

import './index.scss'
import '~invoker-layout/grid.module.scss'
import './../static/fonts/fonts.js'

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