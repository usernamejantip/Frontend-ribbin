import http from "../http-common.js";

const getAll = () => {
  return http.get("/room")
}

const get = (id) => {
  return http.get(`/room/${id}`)
}

const create = (room) => {
  return http.post("/room", room);
}

const addReview = (id, review) => {
  console.log(`/room/${id}`);
  console.log(review)
  return http.patch(`/room/${id}`, review)
}

const update = (id, room) => {
  return http.put(`/room/${id}`, room)
}

const deleteRoom = (id) => {
  return http.delete(`/room/${id}`)
}

const RoomService = {
  getAll,
  get,
  create,
  addReview,
  update,
  deleteRoom
}

export default RoomService