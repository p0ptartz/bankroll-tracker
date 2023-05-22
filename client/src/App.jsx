import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Landing from './components/Landing/landing';
import Dashboard from './components/Dashboard/dashboard';
import Yearly from './components/Yearly/yearly';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:3001/graphql',

});



function App() {
  return (
    <div id='overall'>
      <ApolloProvider client={client}>

        <Router>
          <Routes>

            <Route
              exact
              path="/"
              element={
                <>
                  <Landing />
                </>
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route
              exact
              path="/yearly_results"
              element={
                <>
                  <Yearly />
                </>
              }
            />


          </Routes>
        </Router>

      </ApolloProvider>
    </div>
  );
}

export default App;
