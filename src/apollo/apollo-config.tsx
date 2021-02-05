import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com',
    cache: new InMemoryCache()
});