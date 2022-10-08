import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import './App.scss'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact render={() => <Redirect to={"/home"}></Redirect>}></Route>
        <Route path={'/home'} component={Layout}></Route>
        <Route path={'/login'} component={Login}></Route>
      </Switch>
    </Router>
  )
}
export default App
