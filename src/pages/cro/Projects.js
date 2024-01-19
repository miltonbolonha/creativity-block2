import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "../../components/Slider";
import project1 from "../../assets/CRO/project_1.png"
import project2 from "../../assets/CRO/project_2.png"
import project3 from "../../assets/CRO/project_3.png"
import project4 from "../../assets/CRO/project_4.png"
import project5 from "../../assets/CRO/project_5.png"

const projects = [
    { alt: "project1", src: project1 },
    { alt: "project2", src: project2 },
    { alt: "project3", src: project3 },
    { alt: "project4", src: project4 },
    { alt: "project5", src: project5 },
]


export default function CROProjects() {
    const [active, setActive] = useState(0)

    return (
        <Box color="white" width="80%" overflow="visible" mb="20">
            <Box mb="10">
                <Box className="gradient" textAlign="center" fontSize="49.93px" letterSpacing="-2px">Other Projects</Box>
            </Box>
            <Slider 
                data={projects} 
                renderItem={(item) => (
                    <Box w="400px" h="400px" overflow="hidden" borderRadius="22px" pointerEvents="none">
                        <img style={{width: "100%", height:"100%", objectFit: "cover", pointerEvents: "none"}}  {...item}/>
                    </Box>
                )} 
                onChange={(index) => {
                    let newValue = index > 0 ? active + 1 : active - 1
                    if (newValue < 0) newValue = 0
                    setActive(newValue)
                }} 
            />
        </Box>
    )
}