import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utilities/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return <Field 
            key={name}
            component={SurveyField} 
            type="text"
            label={label}
            name={name}
            />
        })
    }

    render() {
        return (
            <div>
                <form 
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                 </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    if (!values.Title) {
        errors.Title = "You need to Provide a title";
    }

    if(!values.Subject) {
        errors.Subject = "You need to Provide a Subject";
    }
    
    if(!values.Body) {
        errors.Body = "You need to Provide a Body Paragraph";
    }

    

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);