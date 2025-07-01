import axios from "axios";

const VITE_BUILD_NR = import.meta.env.VITE_BUILD_NR;

const apiClient = axios.create({
	baseURL: "https://api.example.com",
	headers: {
		"Content-Type": "application/json",
		"Rando-X": VITE_BUILD_NR,
	},
});

const useApi = () => {
	const get = async (endpoint, params = {}) => {
        console.log("Current apiClient headers:", apiClient.defaults.headers);
		try {
			const response = await apiClient.get(endpoint, { params });
			return response.data;
		} catch (error) {
			console.error("API GET request failed:", error);
			throw error;
		}
	};

	return {
		get,
	};
};

export { useApi};
