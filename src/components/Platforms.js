import { Box, HStack, Stack } from "@chakra-ui/react"

const LogoBox = (props) => {
    return (
        <Box flex="1">
            <Box 
                as="img" 
                src={props.src} 
                alt={props.alt} 
                minW={props.size || "240px"} 
                maxW={props.size || "240px"}
            />
        </Box>
    )
}

export default function Platforms({data = [], size = "240px", title = "", spacing = undefined}){
    return (
        <Stack color="white" w="100%" className="noScroll">
            <Box hidden={!title}>
                <Box className="gradient" textAlign="center" fontSize="22px" letterSpacing="-2px">{title}</Box>
            </Box>
            <HStack overflowX="auto" w="100%" className="noScroll"  spacing={spacing} px="5">
                {data.map(logo => <LogoBox {...logo} size={size}/>)}
            </HStack>
        </Stack>
    )
}