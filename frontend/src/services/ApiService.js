import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

const ApiService = {
	// Method to fetch data from the API
	fetchData: async (endpoint) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	},

	// Method to post data to the API
	postData: async (endpoint, data) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	},

	// Method to update data on the API
	updateData: async (endpoint, data) => {
		try {
			const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	},

	// Method to delete data from the API
	deleteData: async (endpoint) => {
		try {
			const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	}
};

export default ApiService;
