import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="dashboard-home-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team-matches/:id" component={TeamMatches} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
