import { useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap';

const TourComponent = ({id,name,info,price,image,handleClick}) => {
    const [show,setShow]=useState(false);

    return(
        <Card style={{ width: '38rem' ,border:"1px solid black",margin:"1rem"}}>
            <Card.Img variant="top" style={{width:"100%",height:"400px",margin:'auto',objectFit:"cover"}} src={image} />
            <Card.Title>{name}</Card.Title>

            <div>
                <Badge bg="secondary">$ {price}</Badge>
            </div>

            <Card.Text>
                <p className='text-start' >
                    {show ? info :`${info.substr(0,250)}...`}
                    <span sytle={{cursor:"wait"}} className='strong_text text-primary' onClick={()=>setShow(!show)}>{show?"Less" : "Show more"}</span>
                </p>
            </Card.Text>
          <Button onClick={()=>handleClick(id)} variant="success">Not interested</Button>
        </Card>
      )
}

export default TourComponent;
