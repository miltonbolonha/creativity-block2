import { Box, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import process from "../../assets/CRO/process.png"

export function CROProcessx(){
    return (
        <Box color="white" w={"80%"} overflowX="auto" className="noscroll">
             <Box mb="20" className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "33px", md:"56px"}} textAlign="center" lineHeight={{base: "38px",md:"64px"}} >
                The process that will allow us<p></p> to help your business growing
            </Box>
            <HStack w="full" spacing={20} alignItems="flex-start">
                <Box >
                    <Box w="428px" h="428px" overflow="hidden" borderRadius="22px" pointerEvents="none">
                        <img style={{width: "100%", height:"100%", objectFit: "cover", pointerEvents: "none"}} src={process}/>
                    </Box>
                </Box>
                <Box flex="1" ></Box>
                <Stack spacing={8} maxWidth="560px">
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">01</Box>
                        <Box fontWeight={600} fontSize="22px">Choose the solution that suits you the best</Box>
                    </HStack>
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">02</Box>
                        <Box fontWeight={600} fontSize="22px">Book a free meeting with us to discuss your needs</Box>
                    </HStack>
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">03</Box>
                        <Box fontWeight={600} fontSize="22px">Let our team deliver you everything you need to increase your conversion rates</Box>
                    </HStack>
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">04</Box>
                        <Box fontWeight={600} fontSize="22px">Sit back and enjoy the show of turning your clicks into more revenue</Box>
                    </HStack>
                </Stack>
            </HStack>
        </Box>
    )
}

export default function CROProcess(){
    return (
        <Box id="process" color="white" w={"80%"} overflowX="auto" className="noscroll">
            <Box mb="20" className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "33px", md:"56px"}} textAlign="center" lineHeight={{base: "38px",md:"62px"}} >
                The process that will allow us<p></p> to help your business growing
            </Box>
            <SimpleGrid columns={[1,1,1,2,2]}  alignItems="flex-start" gap="10">
                <Stack maxW="480px" gap="12">
                    <Box >
                        <Box w="428px" h="428px" overflow="hidden" borderRadius="22px" pointerEvents="none">
                            <img style={{width: "100%", height:"100%", objectFit: "cover", pointerEvents: "none"}} src={process}/>
                        </Box>
                    </Box>
                </Stack>
                <Stack  gap="6">
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">01</Box>
                        <Box fontWeight={600} fontSize="22px">Choose the solution that suits you the best</Box>
                    </HStack>
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">02</Box>
                        <Box fontWeight={600} fontSize="22px">Book a free meeting with us to discuss your needs</Box>
                    </HStack>
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">03</Box>
                        <Box fontWeight={600} fontSize="22px">Let our team deliver you everything you need to increase your conversion rates</Box>
                    </HStack>
                    <HStack spacing={12}>
                        <Box fontSize="54.86px" fontWeight={700} className="gradient-orange-dark">04</Box>
                        <Box fontWeight={600} fontSize="22px">Sit back and enjoy the show of turning your clicks into more revenue</Box>
                    </HStack>
                </Stack>
            </SimpleGrid>
        </Box>
    )
}