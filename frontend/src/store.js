import { createStore, combineReducers, applyMiddleware } from 'redux'   
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'         
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    },
} 

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

export default store
























// import { createStore, combineReducers, applyMiddleware } from 'redux'   // createStore will be function that creates our store,  
//                                                                         // combineReducers will combine all reducers in our application         
//                                                                         // applyMiddleware is for react-thunks
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducer, productDetailsReducer } from './reducers/productReducers'         // importing the reducer we created

// const reducer = combineReducers({
//     productList: productListReducer,
//     productDetails: productDetailsReducer,
// })

// const initialState = {} 

// const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

// export default store


// // we are setting up this js file to use redux , redux-thunk, redix-devtools-extension