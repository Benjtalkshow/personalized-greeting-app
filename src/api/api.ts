import axios from "axios";

export const fetchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: { count: 4, client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY },
    });
    return response;
};
