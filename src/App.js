import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameList from './pages/GameList';
import GameDetails from './components/game/GameDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={GameList} />
          <Route path='/:id' component={GameDetails} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
