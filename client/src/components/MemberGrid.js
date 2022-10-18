import React, { Suspense } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './MemberGrid.css'
import { useState } from 'react'


const MemberCard = React.lazy(() => import('./MemberCard'));


function MemberGrid(props) {

    const fetchData = (data) => {
        setCards({
            cards: cards.concat(data)
        })
    }


    const cardData = [
        {
            id: 12345,
            name:  "name",
            desc:  "test",
            image: "Media/testimage.png"
        }
    ];

    const [cards, setCards] = useState(cardData);

    let memberNum = cardData.length;

    console.log(cards);

    return (
        <Container fluid>
            {/* {Array(Math.floor(memberNum/4)+1).fill(<Row>{Array(4).fill(<Col> <Suspense fallback={<div>Loading...</div>}> {cards.map((card, i) => <MemberCard memberData={card} key={i}/> )} </Suspense> </Col>)}</Row>)} */}
            <Suspense fallback={<div>Loading...</div>}><MemberCard memberData={cards} /></Suspense>
        </Container>
    );
}


export default MemberGrid;