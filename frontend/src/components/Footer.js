import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <col className='text-center py-3 '>
                        Copyright &copy; Sevda Amini-Uhde
                    </col>
                </Row>
            </Container>           
        </footer>
    )
}

export default Footer
