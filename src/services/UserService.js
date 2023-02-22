import http from "../http-common.js";

const login =(loginData) =>{
    return http.post("/user/login", loginData);
}

const register =(userData)=> {
    return http.post("/user/register", userData);
}

const getAll = () => {
    return http.get("/user/register")
  }

const UserService = {
    login,
    register,
    getAll,
}

export default UserService