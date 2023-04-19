import { createStore, combineReducers, applyMiddleware } from 'redux'   // createStore will be function that creates our store,  
                                                                        // combineReducers will combine all reducers in our application         
                                                                        // applyMiddleware is for react-thunks
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {} 

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

export default store


// we are setting up this js file to use redux , redux-thunk, redix-devtools-extension