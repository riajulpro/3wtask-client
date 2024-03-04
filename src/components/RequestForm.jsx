import { Box, Button, Input, Stack } from "@mui/joy";
import { FormControl, FormLabel } from "@mui/material";

const RequestForm = () => {
  const handleRequestForm = (e) => {
    e.preventDefault();
    console.log("request is sending...");
  };

  return (
    <Box sx={{ maxWidth: "420px" }}>
      <form onSubmit={handleRequestForm}>
        <Stack spacing={2}>
          <FormLabel>Wallet Address</FormLabel>
          <FormControl sx={{ width: "100%" }}>
            <Input
              placeholder="Your wallet address..."
              type="text"
              name="username"
              required
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Request Type</FormLabel>
          </FormControl>
          <Stack spacing={1} direction={"row"}>
            <FormControl sx={{ width: "100%" }}>
              <Input
                placeholder="20 Test Link"
                defaultValue="20 Test Link"
                type="text"
                name="email"
                disabled
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <Input placeholder="0.5 ETH" name="eth" disabled />
            </FormControl>
          </Stack>
          <Button sx={{ width: "100%" }} type="submit">
            Send request
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RequestForm;
