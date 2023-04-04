import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Entry from './components/Entry/entry';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:3001/graphql',

});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Entry />
              </>
            }
          />


        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
