import axios from "axios";

const baseURL = 'https://api.unsplash.com/photos/random';
export const fetchImages = async () => {
    const response = await axios.get(baseURL, {
        params: { count: 4, client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY },
    });
    return response;
};
