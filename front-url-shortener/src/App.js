import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import MyUrls from './components/MyUrls/MyUrls';
import ShortenUrl from './components/ShortenUrl/ShortenUrl';
import Layout from './components/layout/Layout';

const token = localStorage.getItem("token");

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/inscription" component={SignUp} />
          {token !== null ? 
            (
              <>
                <Route exact path="/mes-urls" component={MyUrls} />
                <Route exact path="/raccourcir-une-url" component={ShortenUrl} />
              </>
            ) : (
              // Redirect to the signin page
              <Redirect to="/" />
            )
          }
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
