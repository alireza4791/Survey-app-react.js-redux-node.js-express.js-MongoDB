import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './Surveys/SurveyNew';
import * as actions from '../actions';

class App extends Component {

    componentDidMount = () => {
        this.props.fetchUser();
    }


    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route path='/' component={Landing} />
                    <Route exact path='/surveys' component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {auth: state.auth}
// }

export default connect (null, actions) (App);