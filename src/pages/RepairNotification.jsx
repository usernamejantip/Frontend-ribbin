import React, { useState } from "react";
import { useNavigate, NavLink  } from "react-router-dom";
import RepairService from "../services/RepairService";
import MainLayout from "../layouts/MainLayout";
import swal from "sweetalert";

const RepairNotification = () => {
  const navigate = useNavigate();
  let [Repair, setRepair] = useState({});

  const saveRepair = (e) => {
    e.preventDefault();
      RepairService.create(Repair)
        .then((res) => {
          swal({
            icon: "success",
            text: "Repair complete",
            title: "Result",
          });
          navigate("/repair");
        })
        .catch((e) => {
          swal({
            icon: "error",
            text: "Repair failed",
            title: "Result",
          });
          console.log(e);
        });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRepair({ ...Repair, [name]: value });
  };
  return (
    <MainLayout>
      <h1 className="mt-3">𝗥𝗲𝗽𝗮𝗶𝗿 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻</h1>
      <hr />
      <div className="col d-flex justify-content-end">
      <NavLink to="/showrepair" className="btn btn-success">
                see notification
      </NavLink>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveRepair}>
          <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Date
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="date"
                  id="date"
                  placeholder="Please enter a date."
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
                  placeholder="Please enter your room number."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
               Equipment
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="equipment"
                  id="equipment"
                  placeholder="Please enter the name of the device you want to repair."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
               Note
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="note"
                  id="note"
                  placeholder="Please enter a note."
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
              Status
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  id="status"
                  placeholder="Please enter a repair notification status."
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

export default RepairNotification;
