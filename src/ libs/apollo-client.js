import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

console.log(process.env.REACT_APP_Apollo_URI);
const link = new HttpLink({ uri: process.env.REACT_APP_Apollo_URI });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const apolloclient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

export default apolloclient;