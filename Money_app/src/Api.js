import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios";


const api = axios.create({
    baseURL: 'http://192.168.228.73:3010'
});

export default {
  checkToken: async (token) => {
    try {
      const response = await api.get('/profile',{
         headers: { Authorization: `Bearer ${token} `}
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      const token = await AsyncStorage.getItem('token')

      return response.data;
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getList: async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.get('/recordsUser', {
      headers: { Authorization: `Bearer ${token} `}
    });
    const data = response.data; 
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
  },
  
  getRecordId: async (idProp) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await api.get('/record', idProp, {
        headers: { Authorization: `Bearer ${token} `}
      });
      console.log(response);
      const data = response.data
      return data;

    } catch (error) {
      console.log(error);
      throw error;
    }

  },

  getBalance: async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await api.get('/sumRecords', {
        headers: { Authorization: `Bearer ${token} `}
      });
      const data = response.data
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  postRecord: async (data) => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(data);
      console.log("tokem record: "+ token);
      const response = await api.post('/record/create', data, {
         headers: { Authorization: `Bearer ${token} `}
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateRecord: async (data) => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(data);
      const response = await api.put('/updateRecord', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    }catch (error) {
      console.log(error);
      throw error;
    }
  },

  signUp: async (name, email, password) => {
    try {
      const response = await api.post('/user', { name, email, password });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },


};