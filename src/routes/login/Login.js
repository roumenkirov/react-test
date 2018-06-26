import React, { Fragment,PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../store/actions'


class Login extends PureComponent {

    state = {
        username: '',
        password: '',
        error: ''
    };


    onChangeHandler = e => {
        const value = e.target.value;
        const key = e.target.name;
        this.setState(prevState => {
            return {
                [key]: value
            };
        });
    };

    onSubmitHandler = e => {
        e.preventDefault();


        const account = this.props.users.filter(user => {
            return (
                user.username === this.state.username
                && user.password === this.state.password
            );
        });


        if (account.length === 1) {
            this.props.login(account[0]);

        } else {
            this.setState(prevState => {
                return {
                    error: 'Wrong credentials'
                };
            });
        }

    };

    render() {
        let template = null;

        if (!this.props.account.username) {
            template = (
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" placeholder="Enter username" name="username"
                           value={this.state.username}
                           onChange={this.onChangeHandler}/>
                    <input type="password" placeholder="Enter password" name="password"
                           value={this.state.password}
                           onChange={this.onChangeHandler}
                    />
                    <button type="submit">Login</button>
                    {this.state.error ? <p>{this.state.error}</p> : null}
                </form>
            );
        } else {
            template = (
                <Redirect to="/cinemas"/>
            );
        }

        return (
            <Fragment>
                { template }
            </Fragment>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        account: state.account
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);