import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import MyUrls from './components/MyUrls/MyUrls';
import ShortenUrl from './components/ShortenUrl/ShortenUrl';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/inscription" component={SignUp} />
        <Route exact path="/mes-urls" component={MyUrls} />
        <Route exact path="/raccourcir-une-url" component={ShortenUrl} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
