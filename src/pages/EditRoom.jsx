import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import RoomService from '../services/RoomService';
import swal from 'sweetalert';

const EditRoom = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id;
    let [room, setRoom] = useState({});

    //let inputRoomNumber = useRef();
    //let inputPrince = useRef();
    //let inputFloor = useRef();
    useEffect(() => {
        fetchRoom();
      }, []);

      const fetchRoom = () => {
        RoomService.get(params.id)
          .then((res) => {
            setRoom(res.data.data);
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      const saveRoom = (e) => {
        e.preventDefault();
        RoomService.update(id, room)
            .then((res) =>{
                swal({
                    icon:"success",
                    text:"Insert complete",
                    title: "Result"
                })
                navigate("/room")
            })
            .catch((e)=>{
                swal({
                    icon:"error",
                    text:"Insert failed",
                    title: "Result"
                })
                console.log(e)
            });
        
    }
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRoom({ ...room, [name]: value });
      };
  return (
   <MainLayout>
    <h1 className="mt-3"> Edit Room </h1>
    <hr />
    <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveRoom}>
          <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Picture
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    id="image"
                    placeholder="picture url"
                    onChange={handleInputChange}
                    value={room.image}
                  />
                </div>
              </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Room Number
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="room_number"
                  id="room_number"
                  placeholder="room_number"
                  onChange={handleInputChange}
                  value={room.room_number}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Price
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="price"
                  onChange={handleInputChange}
                  value={room.price}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Floor
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="floor"
                  id="floor"
                  placeholder="floor"
                  onChange={handleInputChange}
                  value={room.floor}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
   </MainLayout>
  )
}

export default EditRoom