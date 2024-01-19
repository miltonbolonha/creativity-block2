import { Box, HStack, SimpleGrid, Stack, VStack } from "@chakra-ui/react";

export default function Stats() {

    const font = {base: "32px", sm: "42px", md: "72px"}
    const fontDescription = {base: "12px", md: "16px"}

    return (
        <Box color="white"  w="full" maxW={'1250px'}  overflow="visible">
            <Box mb="10">
                <Box className="gradient" textAlign="center" fontSize="49.93px" letterSpacing="-2px">Our team members have helped in making</Box>
            </Box>
            <HStack pos="relative" p="6" px="0" spacing={0} overflow="hidden">
                <Box className="gradient-border-gray" pos="absolute" top="0" left="0" right="0" bottom="0"></Box>
                <SimpleGrid columns={[2,2,2,2,4]} w="full" gap={5}>
                    <VStack px="12" flex="1">
                        <Box className="gradient" fontSize={font} fontWeight={700}>+4000</Box>
                        <Box className="gradient-orange" fontSize={fontDescription} whiteSpace="nowrap">Post Created</Box>
                    </VStack>
                    <VStack borderLeft="1px solid white" px="12" flex="1">
                        <Box className="gradient" fontSize={font} fontWeight={700}>+70</Box>
                        <Box className="gradient-orange" fontSize={fontDescription} whiteSpace="nowrap">Improved Accounts</Box>
                    </VStack>
                    <VStack borderLeft={{base: "none", xl: "1px solid white"}} px="12" flex="1">
                        <Box className="gradient" fontSize={font} fontWeight={700}>+50M</Box>
                        <Box className="gradient-orange" fontSize={fontDescription} whiteSpace="nowrap">Impressions</Box>
                    </VStack>
                    <VStack borderLeft="1px solid white" px="12" flex="1">
                        <Box className="gradient" fontSize={font} fontWeight={700}>50%</Box>
                        <Box className="gradient-orange" fontSize={fontDescription} whiteSpace="nowrap">Average  Reach</Box>
                    </VStack>
                </SimpleGrid>
            </HStack>
        </Box>
    )
}