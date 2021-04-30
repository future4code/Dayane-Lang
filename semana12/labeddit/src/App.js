import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Router from "./routes/Router";
//import { MuiThemeProvider } from "@material-ui/core";
import SearchContext from "./context/SearchContext";

const App = () => {
  const [search, setSearch] = useState("");

  const input = { search, setSearch };
  return (
    <SearchContext.Provider value={input}>
      
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
     
    </SearchContext.Provider>
  );
};

export default App;
