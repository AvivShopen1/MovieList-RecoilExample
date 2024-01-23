import { selector } from "recoil";
import allMoviesStore from "./allMovies.store";
import searchQueryStore from "./searchQuery.store";

export default selector({
  key: "filteredMovies",
  get: ({ get }) => {
    const allMovies = get(allMoviesStore);
    // Getting the search query
    const searchQuery = get(searchQueryStore);

    // Filtering the movies based on the search query
    return allMovies.filter((movie) =>
      movie.title.includes(searchQuery)
    );
  },
});
