import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, neutraColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    text: {
      primary: neutraColor,
    },
  },
});

export default theme;
