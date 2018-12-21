import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clear } from '../../ducks/reducer';

import routes from './routes'
import './wizard.css'

const Wizard = (props) => {
    return (
        <div className="wizard">
            <div className="wizard-header">
                <h2 className="wizard-title">Add New Listing</h2>

                <Link to="/">
                    <button className="wizard-cancel" onClick={props.clear}>Cancel</button>
                </Link>
            </div>

            { routes }
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { clear }) (Wizard);