import { Box, Stack } from "@mui/material";
import { logo } from "../constants";
import { colors } from "../constants/colors";
import { SearchBar } from "..";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        position: "static",
        top: 0,
        zIndex: 99,
        background: colors.primary,
      }}
    >
      <img src={logo} alt="Navbar logo" width={"120px"} height={"70px"} />
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
