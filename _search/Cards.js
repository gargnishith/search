// imports
import React from 'react';
import Card from 'react-bootstrap/Card';

// functional react component
const Cards = ({docs}) => {
    console.log(docs)
    return (
        <div>
          {docs.map(doc => (
                    <div className="searchResultCardDiv" key={doc.id}>
                    {/*<Card style={{ width: '18rem' }}>*/}
                    {/*<Card bg="light" text="black" border="success" style={{width : '80rem'}}>*/}
                    <Card bg="light" text="black" border="success" style={{'marginTop': '0px', 'marginBottom': '0px', display : 'flex', flexDirection: 'row'}}>
                        {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                        <Card.Body style={{'marginTop': '0px', 'marginBottom': '0px'}}>
                            <Card.Title style={{fontSize:'medium', 'marginTop': '0px', 'marginBottom': '0px'}}><b>{doc.title}</b></Card.Title>
                            <Card.Text style={{fontSize:'small', 'marginTop': '0px', 'marginBottom': '0px'}}> <b>Description:</b> {doc.description}</Card.Text>
                            <Card.Text style={{fontSize:'small', 'marginTop': '0px', 'marginBottom': '0px'}}> <b>Author:</b> {doc.author}</Card.Text>
                            <Card.Text style={{fontSize:'small', 'marginTop': '0px', 'marginBottom': '0px'}}> <b>Subject:</b> {doc.subjects}</Card.Text>
                            <Card.Text style={{fontSize:'small', 'marginTop': '0px', 'marginBottom': '0px'}}> <b>Resource Type:</b> {doc.resourceType}</Card.Text>
                            <Card.Link style={{fontSize:'small', 'marginTop': '0px', 'marginBottom': '0px'}} href={doc.url}>Open</Card.Link>
                            {/*<Button variant="info" size="sm">Open</Button>*/}
                        </Card.Body>
                    </Card>
                </div>
          ))}
        </div>
      );
};

export default Cards;