import { createStore, combineReducers, applyMiddleware } from 'redux'   
// import {configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productDeleteReducer } from './reducers/productReducers'         
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer,    } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userUpdateProfile: userUpdateProfileReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage,},
    userLogin: { userInfo: userInfoFromStorage },
} 

const middleware = [thunk]

// const store = configureStore({reducer:reducer}, initialState, composeWithDevTools(applyMiddleware(...middleware))) 
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