import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SummaryDetails from '../SummaryDetails/SummaryDetails';
import BookingForm from './BookingForm/BookingForm';

const Summary = () => {
    const {id} = useParams();
    const [SummaryDetails, setSummaryDetails] = useState([]);
    const {name,image,summary,url,status} = SummaryDetails;
    useEffect(()=>{
      const url = `https://api.tvmaze.com/shows/${id}`;
       fetch(url)
       .then(res=> res.json())
       .then(data=> setSummaryDetails(data))
    },[id])


    const [modalIsOpen, setIsOpen] =useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>
         <div className='container'>
          <div className="Row g-4 my-5 d-flex">
          <div className='col-md-4'>  
          <img width="300px" src={image?.original} alt=""/>
          </div>
          <div className='col-md-8'>
          <h1>Name:{name}</h1>
          <p>Summary: {summary}</p>
          <p>Visite link: {url}</p>
          <p>status: {status}</p>
          <Button onClick={openModal} variant="success">BOOK NOW</Button>
          <BookingForm modalIsOpen={modalIsOpen} closeModal={closeModal} SummaryDetails={SummaryDetails} />
          </div>
          </div>
        </div>
        </>
    );
};

export default Summary;