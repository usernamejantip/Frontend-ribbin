import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import RoomService from "../services/RoomService";
import MainLayout from "../layouts/MainLayout";
import swal from "sweetalert";

const NewRoom = () => {
    const navigate = useNavigate();
    let [room, setRoom] = useState({});

    const saveRoom = (e) => {
        e.preventDefault();
        RoomService.create(room)
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
      <h1 className="mt-3">𝗔𝗱𝗱 𝗮 𝗡𝗲𝘄 𝗥𝗼𝗼𝗺</h1>
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
                  placeholder="picture"
                  onChange={handleInputChange}
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
  );
};

export default NewRoom;
