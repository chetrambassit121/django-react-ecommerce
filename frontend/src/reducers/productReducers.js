import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/productConstants'

export const productListReducer = (state ={ products:[] }, action) => {   
    switch(action.type){                                         
        case PRODUCT_LIST_REQUEST:                               
        return {loading:true, product:[]}                    

        case PRODUCT_LIST_SUCCESS:                             
        return {loading:false, product:action.payload}       

        case PRODUCT_LIST_FAIL:                                
        return {loading:false, error:action.payload}

        default:
        return state
    }
}  
































// // a reducer is simply a function that takes
// // in our current state and it's going to take an action of what we want to do to this state so the action would be like
// // load data or it's going to tell us that we got back an error when we're loading our data and depending on what that
// // action type is we're just going to change and manipulate the state so the function is going to take in a state and
// // an action type it's going to manipulate our state or a certain part of our state and it's going to return back a new copy
// // into our store so it's just going to update our store the reducer is what actually updates our store so let's just

// export const productListReducer = (state ={ products:[] }, action) => {   
//                                                                  // our state will start with an emplty list of products, therefore an empty array, and will also take in the action 
//     switch(action.type){                                         // creating a swtich, we'll want to check the action type and then change what we do depending on what this action type is so we're going to
//         case 'PRODUCT_LIST_TYPE':                                // checking if list is loading first
//             return {loading:true, product:[]}                    // loading true bd we are loading data, product set to empty array
        
//         case 'PRODUCT_LIST_SUCCESS':                             // SUCCESSFUL loading of products list
//             return {loading:false, product:action.payload}       // loading flase bc here we are not loading data, product set to action which is set to payload .. running back payload of data

//         case 'PRODUCT_LIST_FAIL':                                // if any of the above two cases fail this is the error case
//             return {loading:false, error:action.payload}

//         default:
//             return state
//     }
// }                          