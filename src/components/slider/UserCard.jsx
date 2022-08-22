import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({image,title,name,quote,id}) => {
    const handleClick=()=>{
        console.table({name,title,quote})
    }
  return (
    <Card className='m-auto' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} style={{width:"100%",height:"200px",objectFit:"cover"}} />
    <Card.Body>
      <Card.Header>{name}</Card.Header>
      <Card.Subtitle>{title}</Card.Subtitle>
      <Card.Text>
        {quote}
      </Card.Text>
      <Button onClick={handleClick} variant="primary">About Me</Button>
    </Card.Body>
  </Card>
  )
}

export default UserCard