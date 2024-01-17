import { Box, Button, SimpleGrid, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import arrow_right from "../../assets/icons/arrow-right.svg";

export default function Faq(){
    return (
        <SimpleGrid columns={[1,1,1,2,2]} w="80%" alignItems="flex-start" gap="10">
            <Stack maxW="480px" gap="12">
                <Box className="gradient" fontSize={"68.64px"} lineHeight={"77.29px"}>Frequently Asked Questions</Box>
                <Button w="fit-content" variant="unstyled" as={Link} to="/cro" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                    <Box>Explore Our Services Now!</Box>
                    <Box><img src={arrow_right}></img></Box>
                </Button>
            </Stack>
            <Stack  gap="6">
                <Box position="relative" p="4">
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" className="gradientFaq" />
                    <Box>Do we provide other services?</Box>
                </Box>
                <Box position="relative" p="4">
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" className="gradientFaq"/>
                    <Box>Who is going to be my POC during the process?</Box>
                </Box>
                <Box position="relative" p="4">
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" className="gradientFaq"/>
                    <Box>Do you offer free consultation or audits before starting a project?</Box>
                </Box>
                <Box position="relative" p="4">
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" className="gradientFaq"/>
                    <Box>What kind of support or maintenance do you offer post-implementation of CRO strategies or Social Media Management?</Box>
                </Box>
            </Stack>
        </SimpleGrid>
    )
}