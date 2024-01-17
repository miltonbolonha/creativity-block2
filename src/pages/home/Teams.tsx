import { useState } from "react";
import { Box, Center, Avatar, Flex } from "@chakra-ui/react";
import team_a from "../../assets/team-a.png"
import team_b from "../../assets/team-b.png"
import team_c from "../../assets/team-c.png"
import team_d from "../../assets/team-d.png"
import team_e from "../../assets/team-e.png"
import linkedin from "../../assets/icons/linkedin.svg"
import Slider from "../../components/Slider";
import GradientBorder from "../../components/GradientBorder";

const people = [
    { name: "Renato Quintal", info: "Founder & Manager", photo: team_a, link: "#linkedin" },
    { name: "Inês Santos", info: "Founder & CEO", photo: team_b, link: "#linkedin" },
    { name: "Ana Martins", info: "Social Media Manager/Designer", photo: team_c },
    { name: "Frederick January", info: "CRO Developer and Tester", photo: team_d },
    { name: "Jomari Andales", info: "CRO UI/UX Design Manager", photo: team_e },
]

function Card({ name = "", photo = "", info = "", link = "" }) {
    return (
        <Box
            w={"340px"}
            bg="linear-gradient(90deg, rgba(255, 81, 47, 0.7) 0%, rgba(240, 152, 25, 0.7) 100%);"
            boxShadow={'2xl'}
            pos="relative"
            rounded={'20px'}
            pointerEvents="none"
            className="no-select"
            overflow={'hidden'}>
            <GradientBorder variant="gradientCard"/>
            <Box
                h={'200px'}
                w={'full'}
                bg="black"
            />
            <Flex justify={'center'} mt={"-120px"} mb="2">
                <Box bg="black" rounded="full" padding="3">
                    <Box bg="linear-gradient(220.3deg, #F57600 13.61%, #FF005C 87.1%)" rounded="full" padding="1.5">
                        <Avatar
                            border='6px solid black'
                            w="160px"
                            h="160px"
                            src={photo}
                        />
                    </Box>
                </Box>
            </Flex>
            <Box textAlign="center" color="white" fontSize="22px">{name}</Box>
            <Box mb="4" textAlign="center" color="rgba(255,255,255,0.7)" fontSize="15px">{info}</Box>
            {link ? <Center  pointerEvents="all" mb="6"><Box _hover={{opacity: 0.8}} as="a" href={link}><img src={linkedin}></img></Box></Center> : null}
        </Box>
    )
}

export default function Teams() {
    const [active, setActive] = useState(0)

    return (
        <Box color="white" width="80%" overflow="visible" mb="20">
            <Box mb="10">
                <Box className="gradient" textAlign="center" fontSize="49.93px" letterSpacing="-2px">Meet the team</Box>
            </Box>
            <Slider 
                data={people} 
                renderItem={(item) => <Card {...item} />} 
                onChange={(index) => {
                    let newValue = index > 0 ? active + 1 : active - 1
                    if (newValue < 0) newValue = 0
                    setActive(newValue)
                }} 
            />
        </Box>
    )
}