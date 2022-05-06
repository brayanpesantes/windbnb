import { Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListCard from "./components/ListCard";

function App() {
  const [locationText, setLocationText] = useState("");
  const [guestTotal, setGuestTotal] = useState(0);

  const handleGuestTotal = (total) => {
    console.log(total);
    setGuestTotal(total);
  };
  console.log(guestTotal);

  return (
    <Flex w={"full"} h="100vh" minH={"100vh"} alignContent={"flex-start"}>
      <Container maxW={"container.lg"}>
        <Header
          setLocationText={setLocationText}
          setGuestTotal={handleGuestTotal}
        />
        <HStack justifyContent={"space-between"} align={"center"} mb={"2rem"}>
          <Heading fontSize={"24px"} lineHeight={"29.26px"} color={"#333333"}>
            Stay in Finland
          </Heading>
          <Text
            as={"span"}
            fontSize={"14px"}
            fontWeight="medium"
            lineHeight={"17.07px"}
            color={"#4F4F4F"}
          >
            12+ stay
          </Text>
        </HStack>
        <ListCard guestTotal={guestTotal} locationText={locationText} />
        <Footer />
      </Container>
    </Flex>
  );
}

export default App;
