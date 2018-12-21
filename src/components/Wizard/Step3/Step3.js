import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, updateListings } from '../../../ducks/reducer';

const Step3 = props => (
    <div className='wizard-form'>
        <div className="recomended-rent">
            <h4>Recommended Rent: ${ props.mortgage * 1.25 }</h4>
        </div>

        <div className="wizard-sub-form">
            <h3>Monthly Mortgage Amount</h3>
            <input className="large-input" type="number" value={ props.mortgage } onChange={ e => props.updateMortgage(e.target.value) } />
        </div>

        
        <div className="wizard-sub-form">
            <h3>Desired Monthly Rent</h3>
            <input className="large-input" type="number" value={ props.rent } onChange={ e => props.updateRent(e.target.value) } />
        </div>

        <Link to="/">
                <button 
                    className="complete-button" 
                    onClick={ 
                        () => props.updateListings({
                            name: props.propertyName,
                            address: props.address,
                            city: props.city,
                            state: props.state,
                            zip: props.zip,
                            img: props.img,
                            mortgage: props.mortgage,
                            rent: props.rent
                        }) 
                    }
                >
                    Complete
                </button>
        </Link>

        <Link to="/wizard/step2">
                <button className="prev-button">Previous Step</button>
        </Link>
    </div>
)

const mapStateToProps = state => state;

export default connect(mapStateToProps, { updateMortgage, updateRent, updateListings }) (Step3);