import { Placeholder, Card } from "react-bootstrap"

const PlaceHolderCard = () => {
    return <Card>
        <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={5} />
                <Placeholder xs={7} /> <Placeholder xs={5} />
            </Placeholder>
        </Card.Body>
    </Card>
}

export default PlaceHolderCard;