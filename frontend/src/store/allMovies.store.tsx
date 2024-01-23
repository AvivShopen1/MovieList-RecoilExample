import { atom } from "recoil";
import movies from '../data/movies.data';
import { Movie } from "../model/Movie";

// Slice the movies to get only the first 2000 movies (to make the app load & render faster)
const moviesList: Movie[] = movies.slice(0, 2000).map(([id, title, genre]) => ({
  id,
  title,
  genre: (genre as string).split("|"),
})) as Movie[];

export default atom<Movie[]>({
  key: 'allMovies',
  default: moviesList
})
