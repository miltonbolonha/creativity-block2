import { Box } from "@chakra-ui/react";

export default function Banner(){
    return (
        <Box 
            id="banner"
            padding={"5px"}
            flexDirection={{base: "column", md: "row" }} 
            gap={{base: "0px", md: "10px" }} 
            bg="#F26500" 
            color="white" 
            justifyContent="center" 
            alignItems="center" 
            display="flex" 
            fontSize={{base: "10.4px", md: "14px" }} 
            lineHeight={"20px"}
        >
            <Box fontWeight={500} textAlign="center">Unlocking Growth Potential through Conversion and Social Media Optimization!</Box>
            <Box textDecoration="underline" fontWeight={800}>Explore Our Services Now!</Box>
        </Box>
    )
}