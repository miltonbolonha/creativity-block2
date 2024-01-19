import { Box, Button, VStack } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Logo from "../../components/Logo";
import Stars from "../../components/Stars";
import arrow_right from "../../assets/icons/arrow-right.svg";
import lava from "../../assets/lava.gif";
import Cards from "./Cards";
import Platforms from "./Platforms";
import Teams from "./Teams";
import Faq from "./Faq";
import Footer from "../../components/Footer";
import { HomeFooterHero } from "./FooterHero";

export const Hero = () => {
    return (
        <VStack gap="5">
            <Stars />
            <Box className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "54px", md:"90px"}} textAlign="center" lineHeight={{base: "52.99px",md:"88.32px"}} >
                Design that has<p></p>real impact
            </Box>
            <Box px="8" py="2" maxW={{base: "420px", md: "640px"}} fontSize={{base: "12px", md:"22px"}} textAlign="center" lineHeight={{base: "18.48px", md: "30.8px"}}>Design isn't merely about creating visually appealing boards.
                it's about delivering tangible results for brands.</Box>
            <a href="#services">
                <Button variant="unstyled" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" gap="3" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                    <Box>Explore Our Services Now!</Box>
                    <Box><img src={arrow_right}></img></Box>
                </Button>
            </a>
        </VStack>
    )
}

export default function Home() {
    return (
        <Box>
            <Banner />
            <VStack gap="16" justifyContent="center" py="16" >
                <Logo text="Creativity Block"/>
                <Hero/>
                <VStack  w="full"  alignItems="center" display="flex" mt={{base: "-80px", md:"-105px"}} >
                    <Box mb={{base: "-140px", md:"-268px"}}><img width="1002px" height="561px" src={lava}></img></Box>
                    <Cards/>
                </VStack>
                <Platforms/>
                <Teams/>
                <Faq/>
            </VStack>
            <Footer>
                <HomeFooterHero/>
            </Footer>
        </Box>
    )
}