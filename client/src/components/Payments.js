import React, { Component } from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {

    render() {
        return (
        <ReactStripeCheckout 
        name="Survey app"
        description="5$ for 5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">ADD CREDITS</button>
        </ReactStripeCheckout>
        );
    }
}


export default connect(null, actions) (Payments);