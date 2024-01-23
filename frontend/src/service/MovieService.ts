import axios from "axios";

const SERVER_URL = `http://${window.location.hostname}:3000`;

type BackendMovie = [number, string, string];

export default {
  getMoviePage: async (page: number) =>
    axios.get<BackendMovie[]>(`${SERVER_URL}/movies?_page=${page}&_limit=15`),
};
