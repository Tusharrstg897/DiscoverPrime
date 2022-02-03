import './App.css';
import Header from "./component/Header/header.js"
import SimpleBottomNavigation from "./component/bottomNav.js"
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
            <Route path='/' component={trending} exact/>
            <Route path='/movie' component={movie}/>
            <Route path='/series' component={series}/>
            </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
