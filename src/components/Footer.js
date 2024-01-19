import { Box, Button, HStack, IconButton, Input,  Stack, VStack } from "@chakra-ui/react";
import Logo from "./Logo";
import lava from "../assets/lava.gif";
import { Link } from "react-router-dom";
import Icon_LinkedIn from "../assets/icons/S_LinkedIn.svg";
import Icon_Insta from "../assets/icons/S_Instagram.svg";
import Icon_Tiktok from "../assets/icons/S_TikTok.svg";


export const QAForm = () => {

    const QAInput = ({label = ""}) => {
        return (
            <Box borderWidth={1} borderColor="rgba(255,255,255,0.5)" w="full" h="69px" rounded="xl" position="relative">
                <Box position="absolute" top="3" left="3" fontSize={10} color={"gray"} letterSpacing={"4%"}>{label}</Box>
                <Input variant="unstyled" p="4" pt="8" borderRadius={"lg"} h="full" />
            </Box>
        )
    }
    return (
        <Stack flexDirection={{base: "column", xl: "row"}} gap={{base: 8, xl: 20}}  alignItems="flex-start">
            <VStack pt={{base: "8", md: "32", xl: "initial"}} alignSelf={{base: "center", xl: "start"}}>
                <Box color="#F18328" fontSize={{base: "12px", md: "14px"}} alignSelf={{base: "center", xl: "start"}}  lineHeight={"19.6px"} letterSpacing="4%">FEEDBACK</Box>
                <Box className="gradient" alignSelf={{base: "center", xl: "start"}} fontSize={{base: "24px", md: "40px"}} lineHeight={{base: "31px", md: "53.3px" }} maxW={{base: "100%", md:"364px"}}>Do you have some<p></p> questions in mind?</Box>
            </VStack>
            <Stack spacing={8} flex="1" w="full">
                <HStack spacing={8}>
                    <QAInput label="YOUR NAME"/>
                    <QAInput label="YOUR EMAIL"/>
                </HStack>
                <QAInput label="YOUR MESSAGE"/>
                <HStack spacing={0}>
                    <Box flex="1"/>
                    <Button _hover={{opacity:0.8}} justifySelf="end" variant="unstyled" borderRadius={"lg"} as={Link} to="/cro" bg="white" color="black" p="12" py="6"  gap="3" fontSize="13px" letterSpacing={"-0.07px"} flexDir="row" display="flex" fontWeight={700}>
                        Send a request
                    </Button>
                </HStack>
            </Stack>
        </Stack>
    )
}

export default function Footer(props) {
    return (
        <Box>
            {props.children}
            <VStack w="full" alignItems="center" display="flex" >
                <Box mb={{ base: "-138px", md: "-264px" }}>
                    <img width="1002px" height="561px" src={lava}></img>
                </Box>
            </VStack>
            <Box backdropFilter="auto" backdropBlur={"6px"} borderTopWidth={1}>
                <Box maxW="1250px" m="auto" py="20">
                    <QAForm/>
                </Box>
            </Box>
            <Box backdropFilter="auto" backdropBlur={"6px"} borderTopWidth={1} borderColor="rgba(255,255,255,0.5)">
                <HStack maxW="1250px" m="auto" py="6">
                    <HStack spacing={{base: 3, md: 6}} flex="1">
                        <Logo />
                        <HStack spacing={{base: 0, md: 0}}>
                            <IconButton _hover={{opacity:0.8}} rounded="full" variant="ghost" aria-label={""}>
                                <Box w={{base: 4, md: 6}} as="img" src={Icon_LinkedIn}></Box>
                            </IconButton>
                            <IconButton _hover={{opacity:0.8}} rounded="full" variant="ghost" aria-label={""}>
                                <Box w={{base: 4, md: 6}} as="img" src={Icon_Insta}></Box>
                            </IconButton>
                            <IconButton _hover={{opacity:0.8}} rounded="full" variant="ghost" aria-label={""}>
                                <Box w={{base: 4, md: 6}} as="img" src={Icon_Tiktok}></Box>
                            </IconButton>
                        </HStack>    
                    </HStack>
                    <HStack spacing={{base: 4, md: 20}} fontSize={{base: "12px", md: "16px"}}>
                        <Box textDecoration={"underline"} as="a" href="/">generalcreativityblock.com</Box>
                        <Box display={{base: "none", md: "inherit"}}>Portugal</Box>
                    </HStack>
                </HStack>
            </Box>
        </Box>

    )
}