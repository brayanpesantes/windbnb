import { Box, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Box as="footer" p={'26px'} mt={10}>
        <Text color={"#828282"} fontSize={"14px"} lineHeight="17px" textAlign={"center"} >created by <Text as={"strong"}>Alexis Nuñez</Text> - devChallenges.io</Text>
    </Box>
  )
}

export default Footer