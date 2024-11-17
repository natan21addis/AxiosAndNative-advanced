import axiosApi from "../AxiosApi";
export const getUsersList=()=>{
   return axiosApi.get('/users');
};

export const getUsersById=userId=>{
   return axiosApi.get(`/user/${userId}`);
}
export const addNewUser=Params=>{
   return axiosApi.post('/users',Params);
}