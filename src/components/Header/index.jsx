import { Image, Stack } from "@chakra-ui/react";
import InputSearch from "../InputSearch";
import logoImage from "../../assets/logo.svg";
function Header({ setLocationText, setGuestTotal }) {
  return (
    <Stack
      mt={"19.75px"}
      mb={"85px"}
      direction={["column", "row"]}
      justifyContent="space-between"
      alignItems={["start", "center"]}
    >
      <Image src={logoImage} h={"18.75px"} />
      <InputSearch
        setLocationText={setLocationText}
        setGuestTotal={setGuestTotal}
      />
    </Stack>
  );
}

export default Header;
