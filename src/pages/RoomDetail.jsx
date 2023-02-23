import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RoomService from "../services/RoomService";
import { NavLink } from 'react-router-dom';

const RoomDetail = () => {
  let params = useParams();
  let [room, setRoom] = useState({});

  useEffect(() => {
    fetchRoom();
  }, []);

  let id = params.id;
let [review, setReview] = useState({});

const saveReview = (e) => {
        e.preventDefault();
        console.log(review)
        RoomService.addReview(id, review)
            .then((res) => {
                fetchRoom()
            })
            .catch(e => {
                console.log(e);
            });
    }

const handleInputChange = event => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: value });
 };


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

  return (
    <MainLayout>
      <h1 className="mt-3">{room.room_number}</h1>
      <hr />
      <div className="row mt-3">
        <div className="col-md-4">
        <NavLink to={`/room/${room._id}`}>
          <img src={room.image} alt="" style={{ width: "400px", height: "250px" }} />
        </NavLink>
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">
              Room Number:{" "}
            </label>{" "}
            {room.room_number}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Price:{" "}
            </label>{" "}
            {room.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Floor:{" "}
            </label>{" "}
            {room.floor}
          </p>
          <p className="text-center">
            <button className="btn btn-primary">Booking Now</button>
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <h2>Reviews of This Room</h2>
        <hr />
        <div className="col">
          <div class="container">
            <form onSubmit={saveReview}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-2 col-form-label">
                  Add your review
                </label>
                <div className="col-2">
                  <select
                    class="form-select"
                    name="star"
                    id="star"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-Select-</option>
                    {[5, 4, 3, 2, 1].map((s) => (
                      <option value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {room.reviews &&
          room.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star: {"🎀".repeat(r.star)}</p>
              <p>{r.comment}</p>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default RoomDetail;
