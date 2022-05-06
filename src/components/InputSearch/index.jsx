import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { MdSearch, MdLocationPin } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";

function InputSearch({ setLocationText, setGuestTotal }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isActiveLocation, setIsActiveLocation] = useState(false);
  const [isActiveGuest, setIsActiveGuest] = useState(false);
  const [textLocation, setTextLocation] = useState("Helsinki, Finland");
  const [textGuest, setTextGuest] = useState(4);
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);

  useEffect(() => {
    setTextGuest(totalAdults + totalChildren);
  }, [totalAdults, totalChildren]);

  const handleSearch = () => {
    setLocationText(textLocation);
    setGuestTotal(textGuest);
    onClose();
  };

  return (
    <>
      <Box
        border={"1px solid #fff"}
        _hover={{ cursor: "pointer" }}
        shadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        borderRadius={"16px"}
        height="55px"
        ref={btnRef}
        onClick={onOpen}
      >
        <HStack h="full" px={5}>
          <Text
            color={"#333333"}
            px={"16px"}
            fontSize={"14px"}
            fontWeight="400"
            lineHeight={"18px"}
            flexDirection={["column", "row"]}
          >
            {textLocation}
          </Text>
          <Divider height={"full"} orientation="vertical" />
          <Text
            color={"#BDBDBD"}
            px={"16px"}
            fontSize={"16px"}
            fontWeight="400"
            lineHeight={"18px"}
          >
            {textGuest === 0 ? "Add Guest" : `${textGuest} Guests`}
          </Text>
          <Divider height={"full"} orientation="vertical" />
          <MdSearch size={17.5} color="#EB5757" px={5} />
        </HStack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Container maxW={"container.lg"}>
              <Box
                shadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
                rounded={18}
                mt={"3rem"}
              >
                <HStack
                  spacing={0}
                  flexGrow={1}
                  flexDirection={["column", "row"]}
                >
                  <Box
                    border={isActiveLocation ? "1px solid #333333" : ""}
                    filter={"drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))"}
                    borderRadius={"16px"}
                    px={"16px"}
                    py={4}
                    flex={1}
                    onClick={() => {
                      setIsActiveLocation(true);
                      setIsActiveGuest(false);
                    }}
                  >
                    <Text
                      color={"#333333"}
                      fontSize={"9px"}
                      fontWeight={800}
                      lineHeight={"9px"}
                    >
                      LOCATION
                    </Text>
                    <Text
                      mt={"4px"}
                      color={"#333333"}
                      fontSize={"14px"}
                      fontWeight={400}
                      lineHeight={"18px"}
                    >
                      {textLocation}
                    </Text>
                  </Box>
                  <Divider
                    height={"full"}
                    orientation="vertical"
                    borderColor={"#F2F2F2"}
                  />
                  <Box
                    border={isActiveGuest ? "1px solid #333333" : ""}
                    filter={"drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1))"}
                    borderRadius={"16px"}
                    px={"16px"}
                    py={4}
                    flex={1}
                    onClick={() => {
                      setIsActiveGuest(true);
                      setIsActiveLocation(false);
                    }}
                  >
                    <Text
                      color={"#333333"}
                      fontSize={"9px"}
                      fontWeight={800}
                      lineHeight={"9px"}
                    >
                      LOCATION
                    </Text>
                    <Text
                      mt={"4px"}
                      color={"#333333"}
                      fontSize={"14px"}
                      fontWeight={400}
                      lineHeight={"18px"}
                    >
                      {textGuest} guests
                    </Text>
                  </Box>
                  <Divider
                    height={"full"}
                    orientation="vertical"
                    borderColor={"#F2F2F2"}
                  />

                  <Flex justifyContent={"center"} alignItems="center" flex={1}>
                    <Button
                      leftIcon={<MdSearch />}
                      bgColor={"#EB5757"}
                      color={"#F2F2F2"}
                      fontSize={"14px"}
                      lineHeight={"18px"}
                      fontWeight={700}
                      borderRadius={"16px"}
                      px={6}
                      _hover={{
                        bgColor: "#F2F2F2 50",
                      }}
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  </Flex>
                </HStack>
              </Box>

              <SimpleGrid columns={3} mt={"40px"}>
                <Box>
                  {isActiveLocation && (
                    <List spacing={"30px"} mb={"40px"} px={4}>
                      <ListItem
                        color={"#4F4F4F"}
                        fontSize="14px"
                        fontWeight={400}
                        cursor="pointer"
                        onClick={() => setTextLocation("Helsinki, Finland")}
                      >
                        <ListIcon as={MdLocationPin} color="#4F4F4F" />
                        Helsinki, Finland
                      </ListItem>
                      <ListItem
                        color={"#4F4F4F"}
                        fontSize="14px"
                        fontWeight={400}
                        cursor="pointer"
                        onClick={() => setTextLocation("Turku, Finland")}
                      >
                        <ListIcon as={MdLocationPin} color="#4F4F4F" />
                        Turku, Finland
                      </ListItem>
                      <ListItem
                        color={"#4F4F4F"}
                        fontSize="14px"
                        fontWeight={400}
                        cursor="pointer"
                        onClick={() => setTextLocation("Oulu, Finland")}
                      >
                        <ListIcon as={MdLocationPin} color="#4F4F4F" />
                        Oulu, Finland
                      </ListItem>
                      <ListItem
                        color={"#4F4F4F"}
                        fontSize="14px"
                        fontWeight={400}
                        cursor="pointer"
                        onClick={() => setTextLocation("Vaasa, Finland")}
                      >
                        <ListIcon as={MdLocationPin} color="#4F4F4F" />
                        Vaasa, Finland
                      </ListItem>
                    </List>
                  )}
                </Box>
                <Box>
                  {isActiveGuest && (
                    <VStack alignItems="self-start" ml={8} mb={10}>
                      <Box>
                        <Text fontSize={"14px"} color="#333333">
                          Adults
                        </Text>
                        <Text fontSize={"14px"} color="#BDBDBD">
                          Ages 13 or above
                        </Text>
                        <HStack mt={"12px"}>
                          <IconButton
                            icon={<FiMinus size={"9.33px"} />}
                            variant="ghost"
                            w={"23px"}
                            h={"23px"}
                            onClick={() => {
                              if (totalAdults > 0)
                                setTotalAdults(totalAdults - 1);
                            }}
                          />
                          <Text>{totalAdults}</Text>
                          <IconButton
                            icon={<FiPlus size={"9.33px"} />}
                            variant="ghost"
                            w={"23px"}
                            h={"23px"}
                            onClick={() => setTotalAdults(totalAdults + 1)}
                          />
                        </HStack>
                      </Box>
                      <Box>
                        <Text fontSize={"14px"} color="#333333">
                          Children
                        </Text>
                        <Text fontSize={"14px"} color="#BDBDBD">
                          Ages 2 - 12
                        </Text>
                        <HStack mt={"12px"}>
                          <IconButton
                            icon={<FiMinus size={"9.33px"} />}
                            variant="ghost"
                            w={"23px"}
                            height={"23px"}
                            onClick={() => {
                              if (totalChildren > 0)
                                setTotalChildren(totalChildren - 1);
                            }}
                          />
                          <Text>{totalChildren}</Text>
                          <IconButton
                            icon={<FiPlus size={"9.33px"} />}
                            variant="ghost"
                            w={"23px"}
                            height={"23px"}
                            onClick={() => setTotalChildren(totalChildren + 1)}
                          />
                        </HStack>
                      </Box>
                    </VStack>
                  )}
                </Box>
              </SimpleGrid>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default InputSearch;
