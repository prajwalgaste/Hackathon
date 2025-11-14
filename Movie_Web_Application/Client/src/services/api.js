import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // <-- change to your backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example request helpers
export const signIn = (payload) => api.post("/auth/signin", payload);
export const signUp = (payload) => api.post("/auth/signup", payload);

export const fetchMovies = () => api.get("/movies");
export const fetchMovie = (id) => api.get(`/movies/${id}`);

export const createReview = (payload) => api.post("/reviews", payload);
export const fetchReview = (id) => api.get(`/reviews/${id}`);
export const updateReview = (id, payload) => api.put(`/reviews/${id}`, payload);
export const deleteReview = (id) => api.delete(`/reviews/${id}`);

export const fetchMyReviews = () => api.get("/reviews/mine");
export const fetchAllReviews = () => api.get("/reviews");
export const fetchSharedReviews = () => api.get("/reviews/shared");

export const shareReview = (payload) => api.post("/shares", payload);

export default api;
