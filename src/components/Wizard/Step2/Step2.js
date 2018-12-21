import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImg } from '../../../ducks/reducer';

const Step2 = props => (
    <div className="wizard-form">
        <div className="wizard-sub-form">
            <h3>Image URL</h3>
            <input className="img-input" value={props.img} onChange={ e => props.updateImg(e.target.value) } />
        </div>

        <Link to="/wizard/step3">
                <button className="next-button">Next Step</button>
        </Link>

        <Link to="/wizard/step1">
                <button className="prev-button">Previous Step</button>
        </Link>
    </div>
)

const mapStateToProps = state => {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, { updateImg }) (Step2);