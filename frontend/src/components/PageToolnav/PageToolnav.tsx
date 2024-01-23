import { Button, IconButton, Stack } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FastForward,
  FastRewind
} from "@mui/icons-material";
import { useRecoilState, useRecoilValue } from "recoil";
import filteredMoviesStore from "../../store/filteredMovies.store";
import pageStore from "../../store/page.store";

const PageToolnav = () => {
  const movies = useRecoilValue(filteredMoviesStore);
  // Use the page atom
  const [currentPage, setCurrentPage] = useRecoilState(pageStore);

  const PAGE_BUTTON_COUNT = 5;
  const count = movies.length;
  const pageCount = Math.ceil(count / 15);

  const pageNumbers = Array.from(Array(PAGE_BUTTON_COUNT).keys()).map((page) =>
    currentPage < PAGE_BUTTON_COUNT / 2
      ? page + 1
      : page + currentPage - Math.floor(PAGE_BUTTON_COUNT / 2)
  );

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  return (
    <Stack
      spacing={2}
      direction="row"
      margin={0}
      marginTop={3}
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      {currentPage > 1 && (
        <>
          <IconButton
            color="primary"
            onClick={() => handlePageChange(currentPage > 1 ? 1 : currentPage)}
          >
            <FastRewind />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          >
            <ArrowBackIos />
          </IconButton>
        </>
      )}
      {pageNumbers.map((page) => {
        return (
          page > 0 &&
          page <= pageCount && (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              variant={page === currentPage ? "contained" : "text"}
            >
              {page}
            </Button>
          )
        );
      })}
      {currentPage < pageCount && (
        <>
          <IconButton
            color="primary"
            onClick={() =>
              handlePageChange(
                currentPage < pageCount ? currentPage + 1 : currentPage
              )
            }
          >
            <ArrowForwardIos />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() =>
              handlePageChange(
                currentPage < pageCount ? pageCount : currentPage
              )
            }
          >
            <FastForward />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default PageToolnav;
