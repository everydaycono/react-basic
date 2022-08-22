import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import UserCard from '../components/slider/UserCard';

// slider data
import people from '../utils/slider/slider';


const Slider = () => {
  const [list,setList]=useState(people);
  const [order,setOrder]=useState(0);

  const userData = list[order];

  console.log(userData);
  const handleSlider=(name="right")=>{
    console.log(name)
    if(name==="left"){
      switch (order) {
        case 0:
          setOrder(people.length - 1);
          break;
        default:
          setOrder(prev=>prev-1);
          break;
      }
    }

    if(name==="right"){
      switch (order) {
        case people.length-1:
          console.log("1")
          setOrder(0);
          break;
          default:
          console.log("2")
          setOrder(prev=>prev+1);
          break;
      }
    }
  };

  useEffect(()=>{
    let aa;
    aa = setInterval(() => {
      handleSlider();
    }, 5000);

    // Sinde I have Cliear fu
    return ()=>{
      clearInterval(aa);
    }
  },[order])
  return (
    <Container className='text-center' >
      <h1>Slider</h1>

      <Container className='card__box  m-auto' >
        <UserCard  {...userData}/>
        <div className='d-flex justify-content-center gap-5'>
          <Button variant='secondary' onClick={()=>handleSlider("left")} name="left" className='left_btn' > 👈🏻 </Button>
          <Button variant='secondary' onClick={()=>handleSlider("right")} name="right" className='right_btn'> 👉🏻 </Button>
        </div>
      </Container>
    </Container>
  )
}

export default Slider