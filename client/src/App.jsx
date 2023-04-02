import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { typeDefs, resolvers } from '../../server/schemas';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:3001/graphql',
  typeDefs,
  resolvers,
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          HI
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
