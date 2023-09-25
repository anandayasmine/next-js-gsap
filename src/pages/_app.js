import React from 'react';
import App from 'next/app';
// import '@/app/assets/scss/index.scss';

import { MainLayout } from '@/app/components/layouts'
import Head from 'next/head';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#108888' },
      secondary: { main: '#322f56' },
    },
  },
)

class index extends App {

  static async getInitialProps({ Component, router, ctx }) {

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }

  }


  componentDidMount() {



  }

  render() {
    const { Component, pageProps } = this.props
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
      <>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </>
    )

  }

}

export default index

