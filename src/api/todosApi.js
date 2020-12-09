import api from "./api"

export const getTodos = () => {
    return api.get('/todos');
}

export const addTodos = (content) =>
    api.post('/todos', { content });

export const deleteTodo = (id) => api.delete(`/todos/${id}`);

export const setTodoIsDone = (id, isDone) => api.put(`/todos/${id}`, { isDone });