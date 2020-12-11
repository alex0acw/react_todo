import api from "./api"

export const getTags = () => {
    return api.get('/tags');
}

export const addTag = (name, color) =>
    api.post('/tags', { name, color });
