import { TextField } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import searchQueryStore from "../../store/searchQuery.store";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryStore);

  return (
    <>
      <TextField
        label="Search Movies Here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
