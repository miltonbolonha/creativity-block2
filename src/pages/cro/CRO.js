import { Box, Button, Stack, VStack } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { CROFooterHero } from "./FooterHero";
import CROFaq from "./Faq";
import CRONavbar from "./Navbar";
import Stars from "../../components/Stars";
import { Link } from "react-router-dom";
import arrow_right from "../../assets/icons/arrow-right.svg";
import hero_img from "../../assets/CRO/cro_hero.png"
import CROPlatforms from "./Platforms";
import CROProjects from "./Projects";
import Stats from "../../components/Stats";
import Reviews from "../../components/Reviews";
import CROWhy from "./WhyWork";
import CROPricing from "./Pricing";
import CROProcess from "./Process";
import CRO_ThisMeans from "./ThisMeans";

export const Hero = () => {
    return (
        <VStack gap="5">
            <Stars />
            <Box letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "54px", md:"90px"}} textAlign="center" lineHeight={{base: "52.99px",md:"88.32px"}} >
                Same Clicks → <Box as="span" className="gradient-orange">More Conversions</Box>
            </Box>
            <Box className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "54px", md:"90px"}} textAlign="center" lineHeight={{base: "52.99px",md:"88.32px"}} >
                With our tested <Box as="span" className="gradient-orange">CRO solutions</Box>
            </Box>
            <Stack  maxW={{base: "720px", md: "9200px"}} spacing={0} >
                <Box px="8" fontSize={{base: "12px", md:"22px"}} textAlign="center" fontWeight={600} lineHeight={{base: "18.48px", md: "30.8px"}}>
                    We help brands converting their website visitors into actual customers
                </Box>
                <Box px="8" fontSize={{base: "12px", md:"22px"}} textAlign="center" fontWeight={300} lineHeight={{base: "18.48px", md: "30.8px"}}>
                    Increase your conversion rates and make more money without spending more on ads
                </Box>
            </Stack>
            <Box  h="30%" w="30%" position="relative" my="3">
                <Box className="gradient-border-orange" position="absolute" top="0" left="0" right="0" bottom="0"/>
                <img src={hero_img} style={{width: "100%", height:"100%"}}></img>
            </Box>
            <Button variant="unstyled" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                <Box>Schedule a FREE discovery call</Box>
                <Box><img src={arrow_right}></img></Box>
            </Button>
        </VStack>
    )
}

export default function CRO() {
    return (
        <Box>
            <Banner />
            <CRONavbar/>
            <br></br>
            <br></br>
            <Hero/>
            <VStack gap="16" justifyContent="center" py="16" >
                <CROPlatforms/>
                <CROProjects/>
                <Stats/>
                <Button variant="unstyled" as={Link} to="/cro#" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                    <Box>Schedule a FREE discovery call</Box>
                    <Box><img src={arrow_right}></img></Box>
                </Button>
                <br></br>
                <Reviews/>
                <br></br>
                <CROWhy/>
                <br></br>
                <CRO_ThisMeans/>
                <br></br>
                <CROPricing/>
                <br></br>
                <CROProcess/>
                <br></br>
                <CROFaq/>
            </VStack>
            <Footer>
                <CROFooterHero/>
            </Footer>
        </Box>
    )
}