import { Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../Card";

function ListCard({ guestTotal, locationText }) {
  const [stays, setStays] = useState([]);

  const getStays = async () => {
    const data = await fetch("../../../stays.json");
    return await data.json();
  };
  useEffect(() => {
    getStays().then((item) => setStays(item));
  }, []);

  useEffect(() => {
    if (guestTotal !== 0) {
      getStays().then((item) =>
        setStays(
          item.filter((stay) => stay.maxGuests === guestTotal && stay.beds > 0)
        )
      );
    }
    console.log(guestTotal);
  }, [guestTotal, locationText]);

  return (
    <SimpleGrid columns={[1, 3]} spacing={"32px"}>
      {stays.length === 0 ? (
        <Heading textAlign={"center"}>Ho Hay Data</Heading>
      ) : (
        stays?.map((stay, index) => <Card item={stay} key={index} />)
      )}
    </SimpleGrid>
  );
}

export default ListCard;
