import { Avatar, Box, HStack, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import star from "../assets/icons/star-red.svg"
import like from "../assets/icons/like-circle.svg"
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import GradientBorder from "./GradientBorder";

const Card = ({children, title, info, image = undefined}) => {
    return (
        <Stack  rounded="xl" w="full" pos="relative" p="6" spacing={0}>
            <GradientBorder variant="gradient-border-gray"/>
            <Avatar src={image} w="75px" h="75px" position="absolute" top="-8" left="5" borderWidth={1} borderColor="gray">
                
            </Avatar>
            <HStack justifyContent="flex-end">
                <HStack gap="0">
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                </HStack>
            </HStack>
            <Box pt="5" flex="1" fontSize={"20px"} fontWeight={300} lineHeight={"24.2px"} mb="10">
                {children}
            </Box>
            <HStack justifyContent="space-between" alignItems="center">
                <Stack spacing={0}>
                    <Box  fontSize={"14px"} fontWeight={800}>{title}</Box>
                    <Box  fontSize={"12px"} fontWeight={400}>{info}</Box>
                </Stack>
                <HStack pr="2">
                    <Box w="6" h="6"><img style={{width:"100%", height: "100%"}} src={like}/></Box>
                    <Box  fontSize={"12px"} fontWeight={800}>Testimonial</Box>
                </HStack>
            </HStack>
        </Stack>
    )
}

export default function Reviews() {

    return (
        <Box color="white"  w="full" maxW={'1250px'} overflowX="auto" className="noscroll">
            <Box mb="14">
                <Box className="gradient" textAlign="center" fontSize="49.93px" letterSpacing="-2px">Look what our clients have to say about us!</Box>
            </Box>
            <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 20, lg: 10}}>
                <Card image={review1} title="John" info="Business Owner">
                    I highly recommend Creativity Block services to anyone looking for not just social media management, but a strategic partner dedicated to enhancing their online presence. The team's professionalism, and efficient approach have truly made a difference in my business! No joke.
                </Card>
                <Card image={review2} title="Rachel C." info="Business Owner">
                    Creativity Block were very comprehensive and fast answering my needs. They also respected the deadline, and the ideas o Gave to them!
                </Card>
            </SimpleGrid>
        </Box>
    )
}