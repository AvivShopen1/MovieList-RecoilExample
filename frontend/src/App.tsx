import "./App.css";
import { Suspense } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList";
import PageToolnav from "./components/PageToolnav/PageToolnav";
import { createTheme, Stack, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack gap={5} marginTop={5}>
        <SearchBar />
        <Suspense fallback={<MovieList skeleton={true} />}>
          <MovieList />
          <PageToolnav />
        </Suspense>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
