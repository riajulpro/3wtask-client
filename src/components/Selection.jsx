import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { KeyboardArrowDown } from "@mui/icons-material";
import { selectClasses } from "@mui/material";
import { useContext } from "react";
import { DropdownContext } from "../context/dropdownContext";

export default function Selection() {
  const { setDropdown } = useContext(DropdownContext);

  const handleChange = (event, newValue) => {
    setDropdown(newValue);
  };

  return (
    <Select
      defaultValue="Arbitrum Rinkeby"
      onChange={handleChange}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      <Option value="Arbitrum Rinkeby">Arbitrum Rinkeby</Option>
      <Option value="Avalnche Fuji">Avalnche Fuji</Option>
      <Option value="BNB Chain Testnet">BNB Chain Testnet</Option>
      <Option value="Ethereum Rinkeby">Ethereum Rinkeby</Option>
      <Option value="Fantom Testnet">Fantom Testnet</Option>
      <Option value="Harmony Testnet">Harmony Testnet</Option>
      <Option value="POA Network Sokol">POA Network Sokol</Option>
      <Option value="Polygon Mumbai">Polygon Mumbai</Option>
    </Select>
  );
}
