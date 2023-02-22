import http from "../http-common.js";

const getAll = () => {
  return http.get("/customer")
}

const get = (id) => {
  return http.get(`/customer/${id}`)
}

const create = (customer) => {
  return http.post("/customer", customer);
}

const update = (id, customer) => {
  return http.put(`/customer/${id}`, customer)
}

const deleteCustomer = (id) => {
  return http.delete(`/customer/${id}`)
}

const CustomerService = {
  getAll,
  get,
  create,
  update,
  deleteCustomer
}

export default CustomerService