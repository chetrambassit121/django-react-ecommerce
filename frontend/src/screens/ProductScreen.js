// ............. this screen will display the product details 

import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

function ProductScreen({ match }) {

  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])                                                                                

  return (
    <div>
      <Link to={'/'} className="btn btn-light my-3">Go Back</Link>
      {loading ? <Loader/>
        : error ? <Message variant='danger'>{error}</Message>
          :(
            <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
              </Col>

              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                      <Row>
                        <Col>Status</Col>
                        <Col>
                          {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Col>
                      </Row>
                    </ListGroupItem>

                    <ListGroupItem>
                      <Button className='btn-block' type='button'>Add to Cart</Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )
      }
    </div>
  )
}

export default ProductScreen