import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './view/Home';
import LandingPage from './view/LandingPage';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/:linkDirectory' component={LandingPage} />
  </Layout>
);
