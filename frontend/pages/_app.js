import { ApolloProvider } from '@apollo/client';
import client from '../apollo';
import '../styles.css';

// a component that wraps our entire next js app
export default function Application({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
