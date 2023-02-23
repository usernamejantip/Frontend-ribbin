import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';
import RoomService from '../services/RoomService';
import { NavLink } from 'react-router-dom';

const Room = () => {
  const [rooms, setRooms ] = useState([]);

  useEffect(()=>{
    fetchRooms()
  },[]);

  const fetchRooms = () =>{
    RoomService.getAll()
      .then((res)=>{
        setRooms(res.data.data)
        console.log(res.data.data);
      }).catch((e)=>{
        console.log(e);
      })
  }

  return (
    <MainLayout>
        <h1 className="mt-3">𝗥𝗼𝗼𝗺</h1>
        <hr />
        <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/room/new" className="btn btn-success">
            Add a Room
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-2 row-cols-3 g-2">
        {rooms.map((p) => (
          <RoomList room={p}/>
        ))}
      </div>
    </MainLayout>
  );
};

const RoomList = (props) => {
  console.log(props)
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
        <img
            src={props.room.image}
            alt=""
            style={{ width: "600px", height: "400px" }}
          />
          <div className="card-text">
            <hr />
            <h5>Room :{props.room.room_number}</h5>
            <p>   “Ribbin Salaya" หอพักสไตล์โมเดรินพร้อมด้วยเฟอร์นิเจอร์บิ้วอินสวย</p>
            <h5>Price :{props.room.price} THB.</h5>
            <hr />
            <NavLink to={'/room/' + props.room._id} className="btn btn-primary">
              Learn More
            </NavLink>{' '}
            <NavLink to="/booking" className="btn btn-success">
              Booking Now
            </NavLink>{' '}
            <NavLink to={'/room/edit/' + props.room._id} className="btn btn-warning">
              Edit
            </NavLink>{' '}
            <NavLink to={'/room/delete/' + props.room._id} className="btn btn-danger">
              Delete
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room