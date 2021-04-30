import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import { Input, InputLabel, InputBase } from "@material-ui/core";
import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";

function SearchBar() {
  const { search, setSearch } = useContext(SearchContext);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <InputLabel>
        <Input
          onChange={onChange}
          value={search}
          placeholder="Pesquisar"
          color="#4373c2"
        />
        <InputBase
          color="#4373c2"
          children={<SearchTwoToneIcon color="white.300" />}
        />
      </InputLabel>
    </div>
  );
}

export default SearchBar;
