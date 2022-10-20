import React, { Suspense } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './MemberGrid.css'
import { useState } from 'react'


const MemberCard = React.lazy(() => import('./MemberCard'));

const cardData = [
    {
        id: 1,
        name:  "name1",
        desc:  "test1",
        image: "Media/testimage.png",
        dateAdded: "2021",
        dateRemoved: "Current"
    },
    {
        id: 2,
        name:  "name2",
        desc:  "test2",
        image: "Media/testimage.png",
        dateAdded: "2021",
        dateRemoved: "2022"
    },
    {
        id: 3,
        name:  "name3",
        desc:  "test3",
        image: "Media/testimage.png",
        dateAdded: "2020",
        dateRemoved: "2021"
    }
];


function MemberGrid(props) {

    const [cards, setCards] = useState(cardData);


    const fetchData = (data) => {
        setCards({
            cards: cards.concat(data)
        })
    }


    let memberNum = cardData.length;

    console.log(cards);

    return (
        <Container fluid>
            {Array(Math.floor(memberNum/4)+1).fill(<Row>{Array(4).fill(<Col> <Suspense fallback={<div>Loading...</div>}> {cards.map((card, i) => <MemberCard key={i}> {card} </MemberCard> )} </Suspense> </Col>)}</Row>)}
        </Container>
    );
}


export default MemberGrid;