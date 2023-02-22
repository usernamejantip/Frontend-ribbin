import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import RepairService from '../services/RepairService';
import swal from 'sweetalert';

const EditRepair = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id;
    let [repairs, setRepairs] = useState({});

    //let inputRoomNumber = useRef();
    //let inputPrince = useRef();
    //let inputFloor = useRef();
    useEffect(() => {
        fetchRrpair();
      }, []);

      const fetchRrpair = () => {
        RepairService.get(params.id)
          .then((res) => {
            setRepairs(res.data.data);
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      const saveRepair = (e) => {
        e.preventDefault();
        RepairService.update(id, repairs)
            .then((res) =>{
                swal({
                    icon:"success",
                    text:"Insert complete",
                    title: "Result"
                })
                navigate("/showrepair")
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
        setRepairs({ ...repairs, [name]: value });
      };
  return (
   <MainLayout>
    <h1 className="mt-3"> 𝗘𝗱𝗶𝘁 𝗥𝗲𝗽𝗮𝗶𝗿 </h1>
    <hr />
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
                  value={repairs.date}
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
                  value={repairs.room_number}
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
                  value={repairs.equipment}
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
                  value={repairs.note}
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
                  placeholder="Please enter a note."
                  onChange={handleInputChange}
                  value={repairs.status}
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

export default EditRepair