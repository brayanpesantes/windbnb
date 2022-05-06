import { Badge, Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import {MdStar} from 'react-icons/md'
function Card({ item }) {
  const { photo, superHost,rating,type,title } = item;
  return (
    <Box >
      <Image src={photo}  height={"269px"} backgroundSize={"cover"} w={"full"} borderRadius={"24px"} _hover={{
        transform:"scale(1.02)",
      }} 
      transition={" transform 0.3s ease-out"}/>
      <HStack mt={'1rem'} justifyContent="space-between">
        {superHost && (
          <Badge
            variant="outline"
            color={"#4F4F4F"}
            borderColor={"#4F4F4F"}
            borderRadius="12px"
            py={1}
            px={4}
            textTransform={"uppercase"}
          >
            super Host
          </Badge>
        )}
       <Text>{type}</Text>
    
        <Text as={'span'} display="flex" gap={'7.12px'} alignItems={"center"} justifyContent="center">   <MdStar color="#EB5757" width={"15.76px"} height={"15.88px"}/>  {rating}</Text>
      </HStack>
      <Heading as={"h2"} fontSize={'16px'} fontWeight={"600"} fontStyle="normal" lineHeight={"20px"} mt={'12px'}>{title}</Heading>
    </Box>
  );
}

export default Card;
