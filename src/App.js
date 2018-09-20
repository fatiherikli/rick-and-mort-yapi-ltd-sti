import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from './pages/home';
import EpisodeDetail from './pages/episode';

const DIR = '/rick-and-mort-yapi-ltd-sti';

const App = () => (
  <Router basename={ DIR }>
    <div>
      <img style={{ display: 'none' }} src="https://loading.io/spinners/bluecat/lg.blue-longcat-spinner.gif" />
      <Route exact path={ `${ process.env.PUBLIC_URL }/` } component={ Home } />
      <Route path={ `${ process.env.PUBLIC_URL }/episodes/:episodeId` } component={ EpisodeDetail } />
    </div>
  </Router>
);


export default App;
