import '../styles/globals.css'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import QueryClient from '../utils'
import Layout from '../containers/layout/Layout'
import { WindowContextProvider } from '../context/Global'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={QueryClient}>
      <WindowContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WindowContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
