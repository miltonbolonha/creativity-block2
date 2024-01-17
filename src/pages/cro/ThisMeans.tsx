import { Stack, Box, SimpleGrid } from "@chakra-ui/react";
import GradientBorder from "../../components/GradientBorder";
import collection from "../../assets/icons/collection-fill.svg"
import kanban from "../../assets/icons/kanban-fill.svg"
import code from "../../assets/icons/file-code-fill.svg"
import cart from "../../assets/icons/cart-check-fill.svg"
import chat from "../../assets/icons/chat-right-quote-fill.svg"
import fill from "../../assets/icons/file-image-fill.svg"

export default function CRO_ThisMeans(){
    return (
        <Stack id="benefits" color="white" width="80%" overflow="visible" spacing={10}>
            <Stack spacing={10}>
                <Box  className="gradient" letterSpacing={{base: "-2px", md:"-2.6px"}} fontWeight={600} fontSize={{base: "33px", md:"56px"}} textAlign="center" lineHeight={{base: "38px",md:"62px"}} >
                This means that when working<p></p> with us you'll have
                </Box>
                <Box position="relative" p={{base: 10, sm: 16, lg: 20}}>
                    <GradientBorder variant="gradientCard"/>
                    <Stack mx="auto" alignItems="center">
                        <SimpleGrid columns={[1,1,2,2,3,3]} w="fit-content" gap={[10,10,10,20,20,20]}>
                            <Box>
                                <img src={collection}/>
                                <br></br>
                                <Box fontWeight={500}>Guaranteed Results Process</Box>
                                <Box fontWeight={400} color="#EFEDFD99">Clear and straightforward<p></p>process with guaranteed results.</Box>
                            </Box>
                            <Box>
                                <img src={kanban}/>
                                <br></br>
                                <Box fontWeight={500}>Detailed Audit & Custom Video</Box>
                                <Box fontWeight={400} color="#EFEDFD99">Detailed website audit and<p></p>report w/ custom video.</Box>
                            </Box>
                            <Box>
                                <img src={code}/>
                                <br></br>
                                <Box fontWeight={500}>Top-notch Design & Development</Box>
                                <Box fontWeight={400} color="#EFEDFD99">Top-notch design and<p></p>development in any platform.</Box>
                            </Box>
                            <Box>
                                <img src={cart}/>
                                <br></br>
                                <Box fontWeight={500}>Higher Conversions & Order Value</Box>
                                <Box fontWeight={400} color="#EFEDFD99">Increased conversion rates <p></p>and average order value.</Box>
                            </Box>
                            <Box>
                                <img src={chat}/>
                                <br></br>
                                <Box fontWeight={500}>Maximized ROAS for Scaling Ads</Box>
                                <Box fontWeight={400} color="#EFEDFD99">Better ROAS that allows you<p></p>to scale your ads.</Box>
                            </Box>
                            <Box>
                                <img src={fill}/>
                                <br></br>
                                <Box fontWeight={500}>Tailored Content</Box>
                                <Box fontWeight={400} color="#EFEDFD99">Tailored content strategies for<p></p>optimal engagement and conversions.</Box>
                            </Box>
                        </SimpleGrid>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}


