import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropName, updateAddress, updateCity, updateState, updateZip } from '../../../ducks/reducer';

const Step1 = props => {
    return (
        <div className="wizard-form">
            <div className="wizard-sub-form">
                <h3>Property Name</h3>
                <input value={props.propertyName} onChange={ e => props.updatePropName(e.target.value) } />
            </div>

            <div className="wizard-sub-form">
                <h3>Address</h3>
                <input className="address-input" value={props.address} onChange={ e => props.updateAddress(e.target.value) } />
            </div>

            <div className="wizard-sub-2-form">
                <div className="address-sub-form">
                    <h3>City</h3>
                    <input value={props.city} onChange={ e => props.updateCity(e.target.value) } />
                </div>

                <div className="address-sub-form">
                    <h3>State</h3>
                    <input className="state-input" value={props.state} onChange={ e => props.updateState(e.target.value) } />
                </div>

                <div className="address-sub-form">
                    <h3>Zip</h3>
                    <input className="zip-input" value={props.zip} onChange={ e => props.updateZip(e.target.value) } />
                </div>
            </div>

            <div>
            <Link to="/wizard/step2">
                <button className="next-button">Next Step</button>
            </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        propertyName: state.propertyName,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, 
    { updatePropName, updateAddress, updateCity, updateState, updateZip }) (Step1);