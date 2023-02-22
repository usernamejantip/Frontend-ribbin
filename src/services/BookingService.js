import http from "../http-common.js";

const getAll = () => {
  return http.get("/booking")
}

const get = (id) => {
  return http.get(`/booking/${id}`)
}

const create = (booking) => {
  return http.post("/booking", booking);
}

const update = (id, booking) => {
  return http.put(`/booking/${id}`, booking)
}

const deleteBooking = (id) => {
  return http.delete(`/booking/${id}`)
}

const BookingService = {
  getAll,
  get,
  create,
  update,
  deleteBooking
}

export default BookingService