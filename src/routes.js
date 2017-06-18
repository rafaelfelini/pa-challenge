import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { auth as firebaseAuth } from 'firebase'
import App from './components/App';
import RegisterFormContainer from './components/RegisterFormContainer';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={(props) => isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
);

const PublicRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={(props) => isAuthenticated === false
      ? <Component {...props} />
    : <Redirect to='/account' />}
  />
);

class Routes extends React.Component {
  state = {
    isAuthenticated: false,
    isLoading: true
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          isLoading: false,
        })
      } else {
        this.setState({
          isAuthenticated: false,
          isLoading: false
        })
      }
    })
  }

  render () {
    const { isAuthenticated, isLoading } = this.state

    if (isLoading) {
      return (
        <h3>
          'Carregando'
        </h3>
      )
    }

    return (
      <BrowserRouter>
        <App isAuthenticated={isAuthenticated}>
          <Switch>
            <Route path='/' exact component={() => <h3>Home</h3>} />
            <PublicRoute isAuthenticated={isAuthenticated} path="/register" component={RegisterFormContainer}/>
            <PublicRoute isAuthenticated={isAuthenticated} path="/login" component={() => <h3>Login</h3>}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path="/account" component={() => <h3>Account</h3>}/>
            <Route render={() => <h3>Not found</h3>} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Routes;
