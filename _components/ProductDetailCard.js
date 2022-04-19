import { Card, Col } from "react-bootstrap";

const ProductDetailCard = ({ id, title, price, description, category, rating }) => {

    return <Card key={id} className='bg-success p-5 border border-dark'>
        <Card.Header className="h4 text-center text-light">{title}</Card.Header>
        <Card.Body>
            <Card.Title><span className="text-warning">{description}</span></Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex">
            <Col>
                <Card.Text className="h5"><span className="text-info">Quantity:</span><span className="text-light">{rating.count} pcs.</span></Card.Text>
                <Card.Text className="h5"><span className="text-info">Rating:</span><span className="text-light">{rating.rate} star</span></Card.Text>
            </Col>
            <Col className="">
                <Card.Text className="h5"><span className="text-info">Category:</span><span className="text-light">{category}</span></Card.Text>
                <Card.Text className="h5"><span className="text-info">Price:</span><span className="text-light">Rs.{price}</span></Card.Text>
            </Col>

        </Card.Footer>
    </Card>
}

export default ProductDetailCard;