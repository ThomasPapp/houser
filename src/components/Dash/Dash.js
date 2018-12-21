import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListingContainer from '../Listing-Container/ListingContainer';

import './dash.css';

const Dash = () => (
    <div className="dash">
        <div className="dash-header">
            <h2 className="dash-header-title">Dashboard</h2>

            <Link to="/wizard/step1">
                <button className="new-prop-button">Add New Property</button>
            </Link>
        </div>
                
        <ListingContainer />
    </div>
)

export default Dash;