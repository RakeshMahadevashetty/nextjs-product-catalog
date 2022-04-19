import Image from "next/image";
import { useRouter } from 'next/router'
import { Card } from "react-bootstrap";

const ProductCard = ({ id, title, price, image }) => {
    const router = useRouter();

    const navigateToProductDetailPage = (e) => {
        e.preventDefault();
        console.log(1);
        id > 0 && router.push(`/productDetail/${id}`)
    }

    return <Card key={id} onClick={navigateToProductDetailPage}>
        <Image src={image} width={100} height={300} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>Price: {price}</Card.Subtitle>
        </Card.Body>
    </Card>
}

export default ProductCard;