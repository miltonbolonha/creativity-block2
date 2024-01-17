import { Box, Button, Center, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import cro from "../../assets/icons/cro.svg"
import social from "../../assets/icons/social.svg"
import arrow_right from "../../assets/icons/arrow-right.svg";
import arrow_right_black from "../../assets/icons/arrow-right-black.svg";
import record from "../../assets/icons/record.svg";
import people from "../../assets/icons/people.svg";
import currency from "../../assets/icons/currency.svg";
import kanban from "../../assets/icons/kanban.svg";
import chat from "../../assets/icons/chat.svg";
import checkgrid from "../../assets/icons/checkgrid.svg";
import eye from "../../assets/icons/eye.svg";
import { Link } from "react-router-dom";
import GradientBorder from "../../components/GradientBorder";


const CardSmall = ({ icon="", title="", description="" }) => {
    return (
        <Box flex="1" p="5" position="relative">
            <GradientBorder variant="gradientCardSmall"/>
            <Stack>
                <Box><img src={icon}></img></Box>
                <Box maxW="435px" color="white" fontWeight={600} fontSize={{base: "11.06px", md:"16px"}} lineHeight={{base: "16.59px", md:"24px"}} overflow="visible" >{title}</Box>
                <Box color="#EFEDFD99" fontSize={{base: "11.06px", md:"16px"}} fontWeight={600} lineHeight={{base: "16.59px", md:"24px"}}>{description}</Box>
            </Stack>
        </Box>
    )
}

const Card = ({ icon="", title="", description="", actionText="", children = undefined, href = "" }) => {
    return (
        <Box flex="1" p={{base: "6", md: "10"}} pb={{base: "2", md:"4"}} position="relative" backdropFilter="auto" backdropBlur={"6px"}>
            <GradientBorder variant="gradientCard"/>
            <Stack gap={4} mb="12">
                <Box><img src={icon}></img></Box>
                <Box className="gradient" maxW="435px" color="white" fontWeight={600} fontSize={{base: "34.51px", md: "49.93px"}} lineHeight={{base: "33.87px", md: "49.93px"}} overflow="visible" letterSpacing={{base: "-1.38px",md: "-2px"}}>{title}</Box>
                <Box className="gradient" fontSize={{base: "11.06px", md:"16px"}} fontWeight={600} lineHeight={{base: "20.64px", md: "30px"}}>{description}</Box>
            </Stack>
            <Button as={Link} to={href} mb="12" w="full" h="100%" py={{base: "2", md:"4"}} px="6" gap="4" flexDir="row" display="flex" variant="unstyled" bg="white" color="black"  fontWeight={600} letterSpacing={{base: "-1.38px",md: "-2px"}} _hover={{bg: "rgba(255,255,255,0.7)"}} _active={{bg: "rgba(255,255,255,0.5)"}}>
                <Box fontSize={{base: "17.28px", md:"25px"}}>{actionText}</Box>
                <Box pt="1"><img src={arrow_right_black}></img></Box>
            </Button>
            <Benefits>
              {children}
            </Benefits>
            <Center pt="12">
                <Button mb="12" h="100%" p={{base: "2", md: "3"}} gap="2" flexDir="row" display="flex" variant="unstyled" bg="transparent" border="1px solid white" borderRadius={"8px"} _hover={{opacity:0.8}} _active={{opacity:0.5}}>
                    <Box fontSize={{base: "9.68px", md:"14px"}}>Learn more</Box>
                    <Box pt=".5"><img src={arrow_right}></img></Box>
                </Button>
            </Center>
        </Box>
    )
}

const Benefits = (props: any) => {
    return (
        <Stack gap="6">
            <Box className="gradient" fontSize={{base: "20.74px", md: "30px"}} textAlign="center" letterSpacing={{base: "-1.38px",md: "-2px"}}>Benefits</Box>
            <SimpleGrid columns={2} gap="6">
                {props.children}
            </SimpleGrid>
        </Stack>
    )
}

export default function Cards(){
    return (
        <SimpleGrid w="full" maxW="80%" gap="16" columns={[1,1,1,1,2,2,2]} id="services">
            <Box>
                <Card 
                    href="/cro"
                    icon={cro} 
                    title="Conversion Rate Optimization" 
                    description="Make more money on your website without spending more on ads with our CRO solutions."
                    actionText="Explore CRO service now"
                >
                    <CardSmall 
                        icon={record}
                        title="Targeted Engagement"
                        description="Boost website efficiency for more leads or sales."
                    />
                    <CardSmall 
                        icon={people}
                        title="Enhanced UX"
                        description="Create a seamless, user-friendly experience."
                    />
                    <CardSmall 
                        icon={currency}
                        title="Maximize ROI"
                        description="Get more from current traffic without extra costs."
                    />
                    <CardSmall 
                        icon={kanban}
                        title="Detailed Analytics"
                        description="Track performance for ongoing optimization."
                    />
                </Card>
            </Box>
            <Box>
                <Card 
                    href="/smm"
                    icon={social} 
                    title="Social Media Management" 
                    description="Increase the reach of your brand’s content with our social media management solutions."
                    actionText="Explore SMM service now"
                >
                    <CardSmall 
                        icon={eye}
                        title="Increased Visibility"
                        description="Build a strong brand presence on social media."
                    />
                    <CardSmall 
                        icon={chat}
                        title="Meaningful Engagement"
                        description="Foster connections for loyal customers."
                    />
                    <CardSmall 
                        icon={record}
                        title="Targeted Advertising"
                        description="Reach the right audience with precision."
                    />
                    <CardSmall 
                        icon={checkgrid}
                        title="Content Amplification"
                        description="Boost reach and engagement for more traffic."
                    />
                </Card>
            </Box>
        </SimpleGrid>
    )
}