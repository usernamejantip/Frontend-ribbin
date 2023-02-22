import React, { useState, useEffect, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import RoomService from '../services/RoomService';
import swal from 'sweetalert';

const DeleteRoom = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id;

    RoomService.deleteRoom(id)
        .then((res)=>{
            swal({
                icon:"success",
                text:"Delete complete",
                title: "Result"
            })
            navigate("/room");
        })
        .catch((e)=>{
            swal({
                icon:"error",
                text:"Delete failed",
                title: "Result"
            })
            console.log(e);
        })

  return (
    <MainLayout>

    </MainLayout>
  )
}

export default DeleteRoom