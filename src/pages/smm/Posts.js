import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "../../components/Slider";

import a from "../../assets/SMM/serviben.png";
import b from "../../assets/SMM/diana_catarino.png";
import c from "../../assets/SMM/rockschool.png";
import d from "../../assets/SMM/plantasdafonte.png";
import e from "../../assets/SMM/bhout.png";
import f from "../../assets/SMM/bhout2.png";

const data = [
    { alt: "project1", src: a },
    { alt: "project2", src: b },
    { alt: "project5", src: e },
    { alt: "project3", src: c },
    { alt: "project4", src: d },
    { alt: "project6", src: f },
]

export default function SMMPosts() {
    const [active, setActive] = useState(0)

    return (
        <Box color="white" width="100%" overflow="visible">
            <Slider 
                initial={1}
                data={data} 
                renderItem={(item) => (
                    <Box w="258px" h="300px" overflow="hidden" borderRadius="22px" pointerEvents="none" borderWidth={1}>
                        <img className="no-select" style={{width: "100%", height:"100%", objectFit: "cover", pointerEvents: "none"}}  {...item}/>
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