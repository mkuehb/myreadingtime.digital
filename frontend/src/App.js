import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import ProtectedRoute from './auth/protected-route'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserHistory } from 'history'

import GlobalStyles from './globalStyles'

import SearchPage from './pages/SearchPage'
import { LandingPage } from './pages/LandingPage'
import ItemPage from './pages/ItemPage'
import WantToReadPage from './pages/WantToReadPage'
import CurrentlyReading from './pages/CurrentlyReading'
import ReadPage from './pages/ReadPage'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'

export const history = createBrowserHistory()

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <Router history={history}>
        <Auth0ProviderWithHistory>
          <QueryClientProvider client={queryClient}>
            <Header />
            <Navigation />
            <Switch>
              <Route exact path='/'>
                <LandingPage />
              </Route>
              <Route path='/search'>
                <SearchPage />
              </Route>
              <ProtectedRoute path='/want-to-read' component={WantToReadPage} />
              <ProtectedRoute
                path='/currently-reading'
                component={CurrentlyReading}
              />
              <ProtectedRoute path='/read' component={ReadPage} />
              <Route path='/book/:id'>
                <ItemPage />
              </Route>
            </Switch>
            <Footer />
          </QueryClientProvider>
        </Auth0ProviderWithHistory>
      </Router>
      <GlobalStyles />
    </>
  )
}

export default App
