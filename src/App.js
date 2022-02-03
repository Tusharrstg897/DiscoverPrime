import './App.css';
import Header from "./component/Header/header.js"
import SimpleBottomNavigation from "./component/bottomNav.js"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { Container } from '@mui/material';

import trending from "./component/pages/Trending/trending";
import movie from "./component/pages/Movie/movie";
import series from "./component/pages/Series/series";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <div className="app">
        <Container>
            <Switch>
              <Route path='/movie' component={movie}/>
              <Route path='/series' component={series}/>
              <Route path='/' component={trending}/>
              <Redirect to='/'/>
            </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
