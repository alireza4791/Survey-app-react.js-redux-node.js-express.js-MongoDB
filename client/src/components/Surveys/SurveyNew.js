import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = { ShowFormReview: false };

    renderContent() {
        if(this.state.ShowFormReview) {
            return <SurveyFormReview 
            onCancel={() => this.setState({ ShowFormReview: false })}
            />
        }

        return <SurveyForm 
        onSurveySubmit={() => this.setState({ ShowFormReview: true })} 
        />
    }


    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}


export default reduxForm({
    form: 'surveyForm'
}) (SurveyNew)