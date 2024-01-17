import { Box, Button, VStack } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { SMMFooterHero } from "./FooterHero";
import SMMFaq from "./Faq";
import SMMNavbar from "./Navbar";
import Stars from "../../components/Stars";
import { Link } from "react-router-dom";
import arrow_right from "../../assets/icons/arrow-right.svg";
import SMMPlatforms from "./Platforms";
import SMMResults from "./Results";
import Stats from "../../components/Stats";
import Reviews from "../../components/Reviews";
import SMMPosts from "./Posts";

export const Hero = () => {
    return (
        <VStack gap="5">
            <Stars />
            <Box className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "54px", md:"90px"}} textAlign="center" lineHeight={{base: "52.99px",md:"88.32px"}} >
                Social Media<p></p>Strategic Content
            </Box>
            <Box px="8" py="2" maxW={{base: "420px", md: "640px"}} fontSize={{base: "12px", md:"22px"}} textAlign="center" lineHeight={{base: "18.48px", md: "30.8px"}}>
                Increase the number of accounts reached on your social networks by over 50% (in less than 90 days)!
            </Box>
            <Button variant="unstyled"  bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                <Box>Explore Our Services Now!</Box>
                <Box><img src={arrow_right}></img></Box>
            </Button>
        </VStack>
    )
}

export default function SMM() {
    return (
        <Box >
            <Banner />
            <SMMNavbar/>
            <br></br>
            <br></br>
            <Hero/>
            <VStack gap="16" justifyContent="center" py="16">
                <SMMPosts/>
                <br></br>
                <SMMPlatforms/>
                <br></br>
                <SMMResults/>
                <Stats/>
                <Button variant="unstyled" as={Link} to="/cro#" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                    <Box>Schedule a FREE discovery call</Box>
                    <Box><img src={arrow_right}></img></Box>
                </Button>
                <br></br>
                <Reviews/>
                <br></br>
                <SMMFaq/>
            </VStack>
            <Footer>
                <SMMFooterHero/>
            </Footer>
        </Box>
    )
}