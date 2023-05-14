import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Animated background from <a href="https://moewalls.com/" target='_blank'>moewalls.com</a></Col>
                    <Col className="text-center py-3">Copyright &copy; Chets Anime Shop</Col>
                    <Col className="text-center py-3">Photos from <a href="https://wallpapercave.com/" target='_blank'>wallpapercave.com</a></Col>

                </Row>
                {/* <Row>
                    <Col className="text-center py-3">Photos from <a href="https://wallpapercave.com/" target='_blank'>wallpapercave.com</a></Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">Photos from <a href="https://wallpapercave.com/" target='_blank'>wallpapercave.com</a></Col>
                </Row> */}
            </Container>
        </footer>
    )
}

export default Footer
