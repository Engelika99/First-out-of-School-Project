import axios from 'axios';

// backend is running locally on port 3000
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUserById = (userId) => axios.get(`${API_URL}/users/${userId}`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (userId, updatedUser) => axios.put(`${API_URL}/users/${userId}`, updatedUser);

export const getExercisesByUserId = (userId) => axios.get(`${API_URL}/users/${userId}/exercises`);
export const createExercise = (userId, exercise) => axios.post(`${API_URL}/users/${userId}/exercises`, exercise);

export const getGoalsByUserId = (userId) => axios.get(`${API_URL}/users/${userId}/goals`);
export const createGoal = (userId, goal) => axios.post(`${API_URL}/users/${userId}/goals`, goal);
