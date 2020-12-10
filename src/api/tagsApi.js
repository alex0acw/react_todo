import api from "./api"

export const getTags = () => {
    return api.get('/tags');
}

export const addTag = ({ content, color }) =>
    api.post('/tags', { content, color });
