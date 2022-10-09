import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';


const Moviecard = ({Movielement}) => {
console.log (Movielement)
    return (


    <Card className='cards' >
      <Card.Body>
        <Card.Title>{Movielement.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Movielement.type}</Card.Subtitle>
        <Card.Text>
          {Movielement.description}
        </Card.Text>
        <Card.Text>{Movielement.date}</Card.Text>
        <Card.Img variant="top" src={Movielement.image} style={{marginBottom :"30px" }}/>
     <br/>  
        <Button variant="warning" href={Movielement.image}>Voir l'image en plein ecran</Button>
      </Card.Body>
    </Card>
  )
}

export default Moviecard