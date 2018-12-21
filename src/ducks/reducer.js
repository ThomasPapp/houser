import axios from 'axios';

const UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';

const CLEAR = 'CLEAR';

const GET_LISTINGS = 'GET_LISTINGS';
const UPDATE_LISTINGS = 'UPDATE_LISTINGS';
const REMOVE_LISTING = 'REMOVE_LISTING';

const initialState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,

    listings: []
}

export const removeListing = id => {
    return {
        type: REMOVE_LISTING,
        payload: axios.delete('/api/listings/'+ id)
    }
}

export const getListings = () => {
    return {
        type: GET_LISTINGS,
        payload: axios.get('/api/listings')
    }
}

export const updateListings = listing => {
    return {
        type: UPDATE_LISTINGS,
        payload: axios.post('/api/listings', listing)
    }
}

export const clear = () => {
    return {
        type: CLEAR,
        payload: initialState
    }
}

export const updatePropName = name => {
    return {
        type: UPDATE_PROP_NAME,
        payload: name
    }
}

export const updateAddress = address => {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export const updateCity = city => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export const updateState = state => {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export const updateZip = zip => {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export const updateImg = img => {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export const updateMortgage = mortgage => {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export const updateRent = rent => {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${REMOVE_LISTING}_FULFILLED`:
            return {
                ...state,
                listings: state.listings.filter(listing => listing != action.payload.data)
            }
        case `${UPDATE_LISTINGS}_FULFILLED`:
            return {
                ...state,
                listings: [...state.listings, action.payload.data]
            }
        case `${GET_LISTINGS}_FULFILLED`:
            return {
                ...state,
                listings: action.payload.data
            }
        case CLEAR:
            return {
                ...action.payload
            }
        case UPDATE_PROP_NAME:
            return {
                ...state,
                propertyName: action.payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload
            }
        case UPDATE_STATE:
            return {
                ...state,
                state: action.payload
            }
        case UPDATE_ZIP:
            return {
                ...state,
                zip: action.payload
            }
        case UPDATE_IMG:
            return {
                ...state,
                img: action.payload
            }
        case UPDATE_MORTGAGE:
            return {
                ...state,
                mortgage: action.payload
            }
        case UPDATE_RENT:
            return {
                ...state,
                rent: action.payload
            }
    }
    return state;
}