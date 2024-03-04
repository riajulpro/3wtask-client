import { Box, Button, Stack } from "@mui/joy";
import Selection from "./Selection";
import IconButtonMenu from "./IconButtonMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ bgcolor: "#fff", paddingY: "20px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ maxWidth: "1280px", marginX: "auto" }}
      >
        <Box sx={{ fontWeight: "800", color: "primary.400", fontSize: "18" }}>
          <Link to={"/"}>Faucets</Link>
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Selection />
          <Button variant="outlined">Collect Wallet</Button>
          <IconButtonMenu />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
