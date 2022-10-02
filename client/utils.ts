import { ApolloClient, InMemoryCache } from "@apollo/client";


const QueryClient = new ApolloClient({
  // uri: 'http://localhost:8000/graphql',
  uri: 'https://music-app-graphql-production.up.railway.app/graphql',
  cache: new InMemoryCache()
})

export default QueryClient
