import http from "../http-common.js";

const getAll = () => {
  return http.get("/repair")
}

const get = (id) => {
  return http.get(`/repair/${id}`)
}

const create = (repair) => {
  return http.post("/repair", repair);
}

const update = (id, repair) => {
  return http.put(`/repair/${id}`, repair)
}

const deleteRepair = (id) => {
  return http.delete(`/repair/${id}`)
}


const RepairService = {
  getAll,
  get,
  create,
  update,
  deleteRepair,
}

export default RepairService