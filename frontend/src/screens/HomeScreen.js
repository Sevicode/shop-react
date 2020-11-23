import React from 'react'
import { Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'


const HomeScreen = () => {
    return (
        <>
            <h1></h1>
            <Row>
                {products.map(product => (
                    <col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </col>
                ))}
            </Row>
            
        </>
    )
}

export default HomeScreen
