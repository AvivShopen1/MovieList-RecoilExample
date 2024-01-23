import { selector } from "recoil";
import allMoviesStore from "./allMovies.store";
import searchQueryStore from "./searchQuery.store";
import { MOVIES_PER_PAGE } from "../consts/consts";
import pageStore from "./page.store";

export default selector({
  key: "filteredPagedMovies",
  get: ({ get }) => {
    const allMovies = get(allMoviesStore);
    const searchQuery = get(searchQueryStore);
    // Getting the page number
    const page = get(pageStore) - 1;

    return allMovies.filter((movie) =>
      movie.title.includes(searchQuery)
    )
    // Slice the movies based on the page number to get the movies for the current page
    .slice(page * MOVIES_PER_PAGE, page * MOVIES_PER_PAGE + MOVIES_PER_PAGE);
  },
});
