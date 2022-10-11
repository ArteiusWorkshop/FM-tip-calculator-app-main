import { Box } from "@mui/material";
import { Bill, Header, People, Results, Tip } from "./Sections";

export const Desktop = () => {
  return (
    <>
      <Header />
      <Box className="box">
        <Box className="mlbox">
          <Bill />
          <Tip />
          <People />
        </Box>
        <Box className="mrbox">
          <Results />
        </Box>
      </Box>
    </>
  );
};
