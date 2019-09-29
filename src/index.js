import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';
import * as serviceWorker from './serviceWorker';
import store from './data/store';
import history from './data/history'

ReactDOM.render(
    (<Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/recipes/:recipeId" component={RecipeDetails} />
                <Route path="/" component={RecipesList} />
            </Switch>
        </ConnectedRouter>
    </Provider>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
