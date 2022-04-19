import { useState } from "react";
import { Accordion, Row, Col, Container } from "react-bootstrap";
import CategoryList from '../_components/CategoryList';
import ProductList from '../_components/ProductList';

export default function Home({ categories, placeHolderCardslength }) {
  let categoriyList = JSON.parse(categories);
  let [selectCategory, setSelectCategory] = useState('all');
    
  return (
    <Container className="py-5">
      <Row>
        <Col className='col-md-2'>
          <Accordion defaultActiveKey={[0]}>
            <Accordion.Header>Categories</Accordion.Header>
            <Accordion.Body className="bg-light p-0">
              <CategoryList category={categoriyList} setSelectCategory={setSelectCategory} />
            </Accordion.Body>
          </Accordion>
        </Col>
        <Col className="col-md-10">
          <ProductList category={selectCategory} placeHolderCards={placeHolderCardslength} />
        </Col>
      </Row>
    </Container>
  )
}

export async function getStaticProps() {
  let categories = await fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json());

  categories.length > 0 ? categories.push('all') : categories.push('no categories')

  let soredCategories = categories.sort()

  return {
    props: { categories: JSON.stringify(soredCategories), placeHolderCardslength: 10 }
  }
}

