import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    rolds: [],
    position: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("fire fetch gender", action);
            return {
                ...state,
                
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = {...state};
            copyState.genders = action.data;
            console.log("fire fetch gender success", copyState);

                return {
                ...state,
                    
                }

        case actionTypes.FETCH_GENDER_FAILED:
            console.log("fire fetch gender failed", action);

            return {
                ...state,
                
            }
        
        default:
            return state;
    }
}

export default adminReducer;