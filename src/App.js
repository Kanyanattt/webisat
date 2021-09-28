import React, { useState } from 'react';
import './App.css';
import Home from './components/page2'
import page15 from './components/page15'
import page2 from './components/page2'
import page5 from './components/page5'
// import page5 from './components/page5'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page15" component={page15} />
        <Route exact path="/page2" component={page2} />
        <Route exact path="/page5" component={page5} />
        {/* <Route exact path="/page5" component={page5} /> */}
      </Switch>
      </BrowserRouter>

  );
}

export default App;
