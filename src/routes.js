import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { auth as firebaseAuth } from 'firebase'
import App from './components/App';
import ProductsListContainer from './components/ProductsListContainer';
import ProductFormContainer from './components/ProductFormContainer';
import AccountFormContainer from './components/AccountFormContainer';
import RegisterFormContainer from './components/RegisterFormContainer';
import LoginFormContainer from './components/LoginFormContainer';

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
            <Route path='/' exact component={ProductsListContainer} />
            <PublicRoute isAuthenticated={isAuthenticated} path="/register" component={RegisterFormContainer}/>
            <PublicRoute isAuthenticated={isAuthenticated} path="/login" component={LoginFormContainer}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path="/account" component={AccountFormContainer}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path="/product/create" component={ProductFormContainer}/>
            <Route render={() => <h3>Not found</h3>} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Routes;
