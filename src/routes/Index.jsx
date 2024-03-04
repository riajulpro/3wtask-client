import { useContext } from "react";
import { DropdownContext } from "../context/dropdownContext";
import RequestForm from "../components/RequestForm";
import { Box } from "@mui/joy";

// eslint-disable-next-line react/prop-types
const IndexPage = () => {
  const { dropdown } = useContext(DropdownContext);

  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.400",
          color: "#fff",
          textAlign: "center",
          padding: "20px 20px",
        }}
      >
        Notice Here
      </Box>
      <Box sx={{ maxWidth: "1280px", marginX: "auto" }}>
        <h1>Request testnet LINK</h1>
        <p>
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
      </Box>
      <Box
        sx={{
          maxWidth: "1280px",
          marginX: "auto",
          bgcolor: "#fff",
          padding: 2,
          borderRadius: 1,
        }}
      >
        <p
          style={{ background: "#eee", padding: "4px 8px", margin: "4px 4px" }}
        >
          Your wallet is connected to{" "}
          <span style={{ fontWeight: 800 }}>{dropdown}</span>, so you are
          requesting <span style={{ fontWeight: 800 }}>{dropdown}</span>{" "}
          Link/ETH.
        </p>
        <RequestForm />
      </Box>
    </>
  );
};

export default IndexPage;
