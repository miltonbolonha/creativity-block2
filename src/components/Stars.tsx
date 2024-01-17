import { Box, HStack } from "@chakra-ui/react";
import star from "../assets/icons/star.svg"

export default function Stars(){
    return (
        <HStack>
            <HStack gap="0">
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
            </HStack>
            <Box color="white" fontSize={"14px"}>Rated 4.9/5 by 300+ Satisfied Clients!</Box>
        </HStack>
    )
}