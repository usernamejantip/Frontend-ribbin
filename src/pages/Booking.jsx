import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import BookingService from "../services/BookingService";
import { useNavigate, NavLink} from "react-router-dom";
import swal from "sweetalert";

const Booking = () => {
  const navigate = useNavigate();
  let [booking, setBooking] = useState({});

  const saveBooking = (e) => {
      e.preventDefault();
      BookingService.create(booking)
          .then((res) =>{
              swal({
                  icon:"success",
                  text:"complete",
                  title: "Result"
              })
              navigate("/booking")
          })
          .catch((e)=>{
              swal({
                  icon:"error",
                  text:"failed",
                  title: "Result"
              })
              console.log(e)
          });
      
  }
  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setBooking({ ...booking, [name]: value });
    };

  return (
    <MainLayout>
      <h3 className="mt-3">𝗕𝗼𝗼𝗸𝗶𝗻𝗴</h3>
      <hr />
      <div className="col d-flex justify-content-end">
      <NavLink to="/bookingslip" className="btn btn-success">
        See Booking Slip
      </NavLink>
      </div>
      <div class="row">
        <img src="/แผง.jpg" width="500" height="500" alt="แผงวงจร" />
      </div>
      <div className="row mt-3">
        <div className="col-md-7"></div>
        <div className="col-md-5">
        <form onSubmit={saveBooking}>
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
                  placeholder="Please enter the room number you want to book."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Please enter the booker's name."
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
                  placeholder="Please enter rental price."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
               Contract
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="contract"
                  id="contract"
                  placeholder="Please enter the contract you want to rent."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  SAVE
                </button>
                <hr />
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Booking;
