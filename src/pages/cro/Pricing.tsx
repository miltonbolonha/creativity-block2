import { Box, Button, Divider, HStack, Stack } from "@chakra-ui/react"
import target from "../../assets/icons/target.svg"
import elipse from "../../assets/elipse.png"
import arrow_right from "../../assets/icons/arrow-right.svg";
import arrow_right_black from "../../assets/icons/arrow-right-black.svg";

export default function CROPricing(){
    return (
        <Stack w="80%" spacing={8} id="pricing">
            <Box>
                <Box className="gradient" textAlign="center" fontSize="49.93px" letterSpacing="-2px" fontWeight={600}>Pricing</Box>
            </Box>
            <HStack  spacing={10} justifyContent="center">
                <Box bg="white" flex="1" p="6" rounded="2xl" minHeight={"600px"} maxW="360px" minW="360px">
                    <img src={target}></img>
                    <br></br>
                    <Box  color="black" fontSize={"36.33px"} h="132px" letterSpacing={-.83} lineHeight="43.97px">CRO Audit and Report</Box>
                    <Box fontSize={"19.82px"} fontWeight={300} color="#797878">For Brands of all sizes.</Box>
                    <Box fontSize={"15px"} fontWeight={700} color="#F23B02">Delivery Time: From 5 Days</Box>
                    <Box color="black" fontSize={"49.55px"}  letterSpacing={-.83}>€499</Box>
                    <Divider></Divider>
                    <br></br>
                    <Box color="black" fontWeight={400} fontSize="16px" textAlign="justify">You'll receive a personalized video-report from one of our analysts, detailing every leak and bad-performer on your website's funnel. </Box>
                    <br></br>
                    <Box color="black" fontWeight={400} fontSize="16px" textAlign="justify">In addition you'll also get a document with TONS of custom recommendations, suggested A/B tests, and immediate fixes to to squeeze the most revenue out of each visitor.</Box>
                    <br></br>
                    <Button gap="3" w="full" variant="outline" borderColor="black"  p="4" py="6" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                        <Box>Get Started Now</Box>
                        <Box><img src={arrow_right_black}></img></Box>
                    </Button>
                </Box>
                <Box bg="white" flex="1" p="6" rounded="2xl" minHeight={"700px"} pos="relative" overflow="hidden" maxW="360px" minW="360px">
                    <img src={target}></img>
                    <img style={{position: "absolute", top: "-100px", left:0, right: 0, width: "100%",  objectFit: "cover", zIndex: 0}} src={elipse}></img>
                    <Box position="relative" zIndex={1}>
                        <Box color="white" fontSize={"36.33px"} letterSpacing={-.83} lineHeight="43.97px">On-Going Optimization</Box>
                        <Box fontSize="19px">Monthly Regular Split Testing</Box>
                        <br></br>
                        <Box color="black" fontWeight={400} fontSize="15px">For brands with at least 20,000 monthly website visitors.</Box>
                        <Box color="white" fontSize={"49.55px"} letterSpacing={-.83}>Let's Talk</Box>
                        <Divider borderColor="black"></Divider>
                        <br></br>
                        <Box color="black" fontWeight={400} fontSize="16px" textAlign="justify">This is our killer offer for those who already have a stablished store and want to take the big step. On a monthly basis, our team will conduct audits, create new designs, and try at least 2-3 split tests. This will allow us to consistently implement data-backed optimizations based on user-behaviour. </Box>
                        <br></br>
                        <Box color="black" fontWeight={400} fontSize="16px" textAlign="justify">If your website is under 150,000 monthly visitors, for the first 90 days we guarantee you an increase of 30% in your conversion rate or you'll get your money back, no questions asked.</Box>
                        <br></br>
                        <Button gap="3" w="full" variant="unstyled" bg="linear-gradient(93.39deg, #EB4715 11.67%, #F9A01B 109.49%);" p="4" py="6" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                            <Box>Book a FREE Strategic Call Now</Box>
                            <Box><img src={arrow_right}></img></Box>
                        </Button>
                    </Box>
                </Box>
                <Box bg="white" flex="1" p="6" rounded="2xl" minHeight={"600px"} maxW="360px" minW="360px">
                    <img src={target}></img>
                    <br></br>
                    <Box mb="4" color="black" fontSize={"36.33px"} h="132px" letterSpacing={-.83} lineHeight="43.97px">Landing Page Design and Development</Box>
                    <Box fontSize={"19.82px"} fontWeight={300} color="#797878">For Brands of all sizes.</Box>
                    <Box fontSize={"15px"} fontWeight={700} color="#F23B02">Delivery Time: From 14 Days</Box>
                    <Box color="black" fontSize={"49.55px"}  letterSpacing={-.83}>€2399</Box>
                    <Divider></Divider>
                    <br></br>
                    <Box color="black" fontWeight={400} fontSize="16px" textAlign="justify">If you already have a landing page or plan to launch a new one for your product/service, this is for you. Our team will design and develop a hyper-converting landing page, tailored to your branding and niche. Expect a fully-functional, responsive and user-centered website.</Box>
                    <br></br>
                    <Box color="black" fontWeight={400} fontSize="16px" textAlign="justify">Note: We can also design and develop entire E-Commerce stores - for that please schedule a meeting here.</Box>
                    <br></br>
                    <Button gap="3" w="full" variant="outline" borderColor="black"  p="4" py="6" fontSize="14px" flexDir="row" display="flex" fontWeight={700}>
                        <Box>Get Started Now</Box>
                        <Box><img src={arrow_right_black}></img></Box>
                    </Button>
                </Box>
            </HStack>
        </Stack>
    )
}