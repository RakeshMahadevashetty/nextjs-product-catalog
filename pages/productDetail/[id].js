import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ProductDetailCard from "../../_components/ProductDetailCard";

const ProductDetail = ({productDeatil}) => {
    const product = JSON.parse(productDeatil);
    console.log(productDeatil);
    return <Container className="py-5">
        <Row>
            <Col className="col-md-6">
                <Image src={product.image} height={400} width={400} />
            </Col>
            <Col className="col-md-6 d-flex justify-content-center">
                <ProductDetailCard {...product} />
            </Col>
        </Row>
    </Container>
}

export default ProductDetail;

export async function getServerSideProps(context) {
    const { id } = context.params

    let productDeatil = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json());

    return {
        props: { productDeatil: JSON.stringify(productDeatil) }
    }
}