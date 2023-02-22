import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';
import BookingService from '../services/BookingService';
import { NavLink } from 'react-router-dom';

const BookingSlip = () => {
  const [booking, setBooking ] = useState([]);

  useEffect(()=>{
    fetchBooking();
  },[]);

  const fetchBooking = () =>{
    BookingService.getAll()
      .then((res)=>{
        setBooking(res.data.data)
        console.log(res.data.data);
      }).catch((e)=>{
        console.log(e);
      })
  }

  return (
    <MainLayout>
        <h1 className="mt-3">𝗕𝗼𝗼𝗸𝗶𝗻𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻</h1>
      <hr />
      <div className="row mt-2 row-cols-lg-1 row-cols-3 g-2">
        {booking.map((p) => (
          <BookingList booking={p}/>
        ))}
      </div>
    </MainLayout>
  );
};

const BookingList = (props) => {
  console.log(props)
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <h6>Room Namber : {props.booking.room_number}</h6>
            <hr />
            <h6>Name :{props.booking.name}</h6>
            <hr />
            <h6>Price :{props.booking.price}</h6>
            <hr />
            <h6>Contract :{props.booking.contract}</h6>
            <hr />
            <NavLink to={'/booking/edit/' + props.booking._id} className="btn btn-warning">
              Edit
            </NavLink>{' '}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BookingSlip