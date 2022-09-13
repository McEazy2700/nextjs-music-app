import '../styles/globals.css'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import QueryClient from '../utils'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={QueryClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
