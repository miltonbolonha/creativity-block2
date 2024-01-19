import { VStack, Button, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import arrow_right from "../../assets/icons/arrow-right.svg";

export const SMMFooterHero = () => {
    return (
        <VStack gap="0" pb="6" pt="32">
            <Box className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "33px", md:"56px"}} textAlign="center" lineHeight={{base: "38px",md:"64px"}} >
                CRO - Designs that sell
            </Box>
            <Box px="8"  fontSize={{base: "12px", md:"22px"}} fontWeight={300} textAlign="center" lineHeight={{base: "18.48px", md: "30.8px"}}>
                <b>We help brands converting their website visitors into actual customers</b>
                <p>Increase your conversion rates and make more money without spending more on ads</p>
            </Box>
            <Button borderRadius={"lg"} variant="unstyled" as={Link} to="/cro" borderWidth={1} borderColor="white" p="4" py="6" mt="4" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                <Box>Explore Our Services Now!</Box>
                <Box><img src={arrow_right}></img></Box>
            </Button>
        </VStack>
    )
}