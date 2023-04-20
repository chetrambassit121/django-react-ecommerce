// implementing redux, implmenting out listProducts to return the prodycts to our home screen. 

import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'     
import  {listProducts}  from '../actions/productActions'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])                                                                                

  // const products = []

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? <h2>Loading...</h2>
        : error ? <h3>{error}</h3>
          :
            <Row>
              {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
                </Col>
              ))}
            </Row>
      }
    </div>
  )
}

export default HomeScreen


































// import React, {useState, useEffect} from 'react'
// // import products from '../products'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import axios from 'axios'                      // using axios to make calls and load data then update 

// function HomeScreen() {

//   // constant [products (our state is called products), setProducts (method for updating the state)] bound to useState([empty array]) ... this is our set up for using useState 
//   const [products, setProducts] = useState([])   

//   // using useEffect to load our products . it gets triggered everytime a component loads or if a state value gets updated .
//   // its a arrow function => . 
//   useEffect(() => {
//     async function fetchProducts(){                                                     // creating the async function ... 
//       const {data} = await axios.get('/api/products/')               // constant data . awaiting for axios getting the url 
//       setProducts(data)                         
//     }
//     fetchProducts()                                       
//   }, [])                                                                                // [empty array] b/c we only want update when a component loads not when a state element gets updated 

    

//   return (
//     <div>
//       <h1>Latest Products</h1>
//       <Row>
//         {products.map(product => (
//           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//             <Product product={product}/>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   )
// }

// export default HomeScreen



















// ..... starting of our homescreen page ... user can click on a product on go to productscreen

// import React from 'react'
// import products from '../products'               // products file that contains json data based on our products
// import { Row, Col } from 'react-bootstrap'       // importing these elements to use 
// import Product from '../components/Product'      // importing this component we created 

// function HomeScreen() {
//   return (
//     <div>
//       <h1>Latest Products</h1>
//       <Row>
//         {products.map(product => (
//           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//             <Product product={product}/>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   )
// }

// export default HomeScreen