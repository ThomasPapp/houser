import React from 'react';
import { connect } from 'react-redux';
import { removeListing } from '../../ducks/reducer';

import './listing.css'

const Listing = props => (
    <div className="listing">
        <div className="listing-box">
            <img src={ props.listing.img } />
        </div>
        <div className="listing-box">
            <p>Property Name: { props.listing.name }</p>
            <p>Address: { props.listing.address }</p>
            <p>City: { props.listing.city }</p>
            <p>State: { props.listing.state }</p>
            <p>Zip: { props.listing.zip }</p>
        </div>
        <div className="listing-box">
            <p>Monthly Mortgage: { props.listing.mortgage }</p>
            <p>Desired Rent: { props.listing.rent }</p> 
        </div>

        <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII=" 
            alt="delete button"
            className="listing-delete"
            onClick={ () => props.removeListing(props.listing.id) }
        />
    </div>
)

const mapStateToProps = state => state;

export default connect(mapStateToProps, { removeListing }) (Listing);