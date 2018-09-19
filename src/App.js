import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/home';
import EpisodeDetail from './pages/episode';

const App = () => (
  <Router>
    <div>
      <img style={{ display: 'none' }} src="https://loading.io/spinners/interwind/lg.ball-interwind-preloader.gif" />
      <Route exact path="/" component={ Home } />
      <Route path={ `/episodes/:episodeId` } component={ EpisodeDetail } />
    </div>
  </Router>
);


export default App;
