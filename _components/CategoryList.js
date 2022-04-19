import { Nav } from "react-bootstrap";

const CategoryList = ({ category, setSelectCategory }) => {

    return <Nav>
        {category.map(key =>
            <Nav.Item className="row col-md-12">
                <Nav.Link onClick={e => setSelectCategory(key)} eventKey={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Nav.Link>
            </Nav.Item>)}
    </Nav>
}

export default CategoryList;