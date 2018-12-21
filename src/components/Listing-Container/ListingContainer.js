import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListings } from '../../ducks/reducer';
import Listing from '../Listing/Listing'

import './listingContainer.css'

class ListingContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getListings()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.listings != this.props.listings) {
            this.props.getListings()
        }
    }

    render() {
        const listings = this.props.listings.map(listing => <Listing key={listing.id} listing={listing} />)
        return (
            <div className="listing-container">
                <div className="listing-container-header">
                    <h3>Home Listings</h3>
                </div>
    
                <div className="listings">
                    { listings }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps, { getListings }) (ListingContainer);