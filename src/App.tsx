import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import Layout from './pages/Layout'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/home'} component={Layout}></Route>
        <Route path={'/login'} component={Login}></Route>
      </Switch>
    </Router>
  )
}
export default App
