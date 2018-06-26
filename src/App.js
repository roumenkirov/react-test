import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './routes/login/Login';
import Cinemas from './routes/cinemas/Cinemas';
import Program from './routes/program/Program';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Login}></Route>
                        {this.props.account.username ? <Route path="/cinemas" exact component={Cinemas}></Route> : null}
                        {this.props.account.username ?
                            <Route path="/program/:name" exact component={Program}></Route> : null}
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    };
};

export default connect(mapStateToProps, null)(App);
