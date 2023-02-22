import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';
import RepairService from '../services/RepairService';
import { NavLink } from 'react-router-dom';

const ShowRepair = () => {
  const [repairs, setRepairs ] = useState([]);

  useEffect(()=>{
    fetchRepairs();
  },[]);

  const fetchRepairs = () =>{
    RepairService.getAll()
      .then((res)=>{
        setRepairs(res.data.data)
        console.log(res.data.data);
      }).catch((e)=>{
        console.log(e);
      })
  }

  return (
    <MainLayout>
        <h1 className="mt-3">𝗥𝗲𝗽𝗮𝗶𝗿 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻</h1>
      <hr />
      <div className="row mt-2 row-cols-lg-1 row-cols-3 g-2">
        {repairs.map((p) => (
          <RepairList repairs={p}/>
        ))}
      </div>
    </MainLayout>
  );
};

const RepairList = (props) => {
  console.log(props)
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <h6>Date : {props.repairs.date}</h6>
            <hr />
            <h6>Room Number : {props.repairs.room_number}</h6>
            <hr />
            <h6>Equipment : {props.repairs.equipment}</h6>
            <hr />
            <h6>Note : {props.repairs.note}</h6>
            <hr />
            <h6>Status : {props.repairs.status}</h6>
            <NavLink to={'/repair/edit/' + props.repairs._id} className="btn btn-warning">
              Edit
            </NavLink>{' '}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ShowRepair