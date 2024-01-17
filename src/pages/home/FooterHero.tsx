import { VStack, Button, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import arrow_right from "../../assets/icons/arrow-right.svg";

export const HomeFooterHero = () => {
    return (
        <VStack gap="0" pb="6" pt="32">
            <Box className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "33px", md:"56px"}} textAlign="center" lineHeight={{base: "38px",md:"64px"}} >
                Design that has real impact
            </Box>
            <Box px="8" maxW={{base: "420px", md: "640px"}} fontSize={{base: "12px", md:"22px"}} textAlign="center" lineHeight={{base: "18.48px", md: "30.8px"}}>Design isn't merely about creating visually appealing boards.
                it's about delivering tangible results for brands.
            </Box>
            <a href="#services"><Button borderRadius={"lg"} variant="unstyled" borderWidth={1} borderColor="white" p="4" py="6" mt="4" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                <Box>Explore Our Services Now!</Box>
                <Box><img src={arrow_right}></img></Box>
            </Button></a>
        </VStack>
    )
}