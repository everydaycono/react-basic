import React, { useEffect, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap';

// Components
import TourComponent from '../components/tour/TourComponent';

// Json
import tourLista from "../utils/tour/tour.json"
const Tour = () => {
  const [tourList,setTourList]=useState([]);
  const [isLoading,setLoading]=useState(true);

  const getTours=async()=>{
    setLoading(true);
    try{
      setTimeout(() => {
        setTourList(tourLista);
        setLoading(false);
      }, 100);
    }catch(err){
      console.error(err)
      setLoading(false);
    }
  }

  const handleClick=(id)=>{
    const filteredList = tourList.filter(item=>item.id!==id);
    setTourList(filteredList);
  }

  useEffect(()=>{
    getTours()
  },[])



  if(isLoading && tourList.length === 0){
    return <Container className='text-center d-flex flex-column align-items-center' >
      <Spinner  animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  }
  
  if(!isLoading && tourList.length === 0){
    return(
      <Container className='text-center d-flex flex-column align-items-center' >
        <h1>No Tours data.</h1>
        <Button variant="success" onClick={getTours} >Refresh</Button>
      </Container>
    )
  }

  return (
    <Container className='text-center d-flex flex-column align-items-center' >
      <h1 >Our Tours</h1>
    {tourList.map(tour=>{
      return(
          <TourComponent key={tour.id} {...tour}  handleClick={handleClick}/>
          )
      })}
    </Container>
  )
}

export default Tour