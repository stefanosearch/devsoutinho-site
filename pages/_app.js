import App from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: 'red',
  },
  spacing: {
    big: 50,
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
