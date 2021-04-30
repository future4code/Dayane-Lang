import { Search2Icon } from "@material-ui/core";
import { Input, InputGroup, InputRightElement } from "@material-ui/core";
import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";

function SearchBar() {
  const [search, setSearch] = useContext(SearchContext);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <InputGroup>
        <Input onChange={onChange} value={search} placeholder="Pesquisar" />
        <InputRightElement children={<Search2Icon color="#f1aad7.300" />} />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
