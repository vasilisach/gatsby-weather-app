import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo-config';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
);