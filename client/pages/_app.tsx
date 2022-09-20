import '../styles/globals.css'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import QueryClient from '../utils'
import Layout from '../containers/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={QueryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
