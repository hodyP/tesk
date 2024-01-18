import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:5006"
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axiosInstance.get(`/item`)
     
    return result.data;
  },

  addTask: async(name)=>{
    const result = await axiosInstance.post(`/item`,{"Name":name,"IsComplete":false});
    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    const result = await axiosInstance.put(`/item/${id}`, {"IsComplete":isComplete});
    return result.data;
  },

  deleteTask:async(id)=>{
    await axiosInstance.delete(`/item/${id}`);
  }
};
