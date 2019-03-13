import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import reducers from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



import { Router, Route, Switch } from 'react-router-dom';
import history from './store/history';
import GlobalStyle from './style/Global';
import { ThemeProvider } from 'styled-components';

import Dashboard from './components/pages/Dashboard/Dashboard';
import Moble from './components/pages/moble/Moble';
import SignInCp from './components/pages/auth/SignInCp';
import SignOutCp from './components/pages/auth/SignOutCp';



const store = createStore(
    reducers,applyMiddleware(reduxThunk)
);

const theme = createMuiTheme({
    palette: {
      primary: { main: '#4D658D' }, 
      secondary: { main: '#aa3e3e' }, 
      error: { main: '#D4CC6A' },  
    },
});

const themeB = {
    colors: {
      primary: '#aa3e3e',
      secondary: '#4D658D'
    }
};


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>    
        <GlobalStyle />
        <Router  history={history}>
        <ThemeProvider theme={themeB}>
            <App>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/m2" exact component={Moble} />
                <Route path="/signin" exact component={SignInCp} />
                <Route path="/signout" exact component={SignOutCp} />
            </Switch>
            </App>
        </ThemeProvider>    
        </Router>
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
