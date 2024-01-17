import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import checkmark from "../../assets/icons/checkmark.svg"
import why1 from "../../assets/CRO/why1.png"
import why2 from "../../assets/CRO/why2.png"
import arrow_right from "../../assets/icons/arrow-right.svg";

export default function CROWhyWork(){
    return (
        <Stack color="white" width="80%" overflow="visible" spacing={10}>
            <Stack spacing={10}>
                <Box className="gradient" textAlign="center" fontSize="49.93px" letterSpacing="-2px">Why work with us?</Box>
                <Stack bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);"  width="100%"  borderRadius="12px" p="16" alignItems="flex-start" gap={16}>
                    <HStack flex="1" w="full">
                        <Stack gap={16} flex="1">
                            <Box>
                                <img src={checkmark}></img>
                            </Box>
                            <Stack gap={10} fontSize="22px" fontWeight={400} maxW="577px">
                                <Box>
                                    Don't make the same costly mistakes that other business owners do. Invest in optimizing your website for higher conversions instead of relying on guesswork. 
                                </Box>
                                <Box>
                                    Experience the power of CRO with tailored funnels and custom pages for your products/services.
                                </Box>
                            </Stack>
                        </Stack>
                        <Box w="400px" h="300px" rounded="2xl" overflow="hidden" alignSelf="flex-end" mr="-32">
                            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={why1}></img>
                        </Box>
                    </HStack>
                    <HStack flex="1" w="full">
                        <Stack gap={16} flex="1">
                            <Stack>
                                <Box className="gradient" fontSize="49.93px" letterSpacing="-2px" fontWeight={600}>But we get it</Box>
                            </Stack>
                            <Stack gap={10} fontSize="22px" fontWeight={400} maxW="577px">
                                <Box>
                                    Not everyone has the expertise to leverage analytics for funnel and page optimization. Rest assured, each member of our team boasts a minimum of 7 years of formidable experience in either Design, Technology and Data Analytics
                                </Box>
                                <Box>
                                    Unlock the power of data-driven website optimization with our seasoned team.
                                </Box>
                            </Stack>
                        </Stack>
                        <Box w="400px" h="300px" rounded="2xl" overflow="hidden" >
                            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={why2}></img>
                        </Box>
                    </HStack>
                </Stack>
            </Stack>
            <HStack spacing={6} justifyContent="center">
                <Button gap="3" variant="unstyled" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                    <Box>Schedule a FREE discovery call</Box>
                    <Box><img src={arrow_right}></img></Box>
                </Button>
                <a href="#pricing" >
                    <Button borderRadius={"lg"} variant="unstyled" borderWidth={1} borderColor="white" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                        <Box>Pricing</Box>
                        <Box><img src={arrow_right}></img></Box>
                    </Button>
                </a>
            </HStack>
        </Stack>
    )
}