import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { auth as firebaseAuth } from 'firebase'
import App from './components/App';
import Loading from './components/Loading';
import AccountFormContainer from './components/AccountFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import ProductFormContainer from './components/ProductFormContainer';
import ProductBuyContainer from './components/ProductBuyContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import ProductsListContainer from './components/ProductsListContainer';
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
        <Loading />
      )
    }

    return (
      <BrowserRouter>
        <App isAuthenticated={isAuthenticated}>
          <Switch>

            <Route path='/' exact component={ProductsListContainer} />
            <PrivateRoute path="/product/create" component={ProductFormContainer} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/product/:id/buy" component={ProductBuyContainer} isAuthenticated={isAuthenticated} />
            <Route path="/product/:id" component={ProductDetailContainer} />

            <PublicRoute path="/register" component={RegisterFormContainer} isAuthenticated={isAuthenticated} />
            <PublicRoute path="/login" component={LoginFormContainer} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/account" component={AccountFormContainer} isAuthenticated={isAuthenticated} />
            <Route render={() => <h3>Not found</h3>} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Routes;
