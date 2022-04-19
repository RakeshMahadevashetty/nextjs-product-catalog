import { Row, Col, Placeholder } from "react-bootstrap";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PlaceHolderCard = dynamic(() => import('./PlaceholderCard'));
const ProductCard = dynamic(() => import('./ProductCard'))

const ProductList = ({ category = 'all', placeHolderCards }) => {
    const [productList, setProductList] = useState({});
    const [placeHolderCardsLength, setPlaceHolderCardsLength] = useState(Number(placeHolderCards))

    useEffect(() => {
        setTimeout(async () => {
            await fetchAndUpdateProductList()
        }, 1000);

        return clearTimeout()
    }, [])

    useEffect(() => {
        setProductList({})
        setPlaceHolderCardsLength(placeHolderCards)
        setTimeout(async () => {
            await fetchAndUpdateProductList()
        }, 1000);

        return clearTimeout()
    }, [category])

    const fetchAndUpdateProductList = async () => {
        let urlQuery = 'https://fakestoreapi.com/products';
        urlQuery = category !== 'all' ? `${urlQuery}/category/${category}` : `${urlQuery}`;
        let products = await fetch(urlQuery).then(async res => await res.json());
        let constructedData = constructProductsData(products)
        setProductList({ ...constructedData })
        setPlaceHolderCardsLength(0)
    }

    const constructProductsData = (data) => {
        let constructedData = {};
        let allCategories = Object.values(data).map(value => value.category)
        let uniqueCateogories = [...new Set([...allCategories])];
        uniqueCateogories.map(key => constructedData[key] = Object.values(data).filter(value => value.category === key))
        return constructedData;
    }

    const getPlaceholderCards = () => {
        var placeHolderStack = [];
        for (let i = 0; i < placeHolderCardsLength; i++) {
            placeHolderStack.push(<PlaceHolderCard />)
        }
        return placeHolderStack;
    }

    return <>{Object.keys(productList).length > 0 && Object.keys(productList).map(key => <Col className="col-md-12 mb-3">
        <h1>{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
        <Row sm={1} md={4} lx={5} className='justify-content-between'>
            {Object.values(productList[key]).map(value => <ProductCard {...value} />)}
        </Row>
    </Col>)}
        {
            Number(placeHolderCardsLength) > 0 && <Col className="col-md-12 mb-3">
                <Placeholder xs={3} className="p-0 m-3" animation="glow"/>
                <Row sm={1} md={4} lx={5} className='justify-content-between'>{getPlaceholderCards()}</Row>
            </Col>
        }
    </>
}

export default ProductList;
