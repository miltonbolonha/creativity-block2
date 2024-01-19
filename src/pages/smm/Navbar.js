import { Box, Button, HStack, IconButton } from "@chakra-ui/react";
import Logo from "../../components/Logo";
import menuIcon from "../../assets/icons/menu.svg";

const NavButton = ({children}) => (
    <Button 
        color="white" 
        fontSize={"16px"} 
        fontWeight={300} 
        variant="ghost" 
        colorScheme="whiteAlpha"
    >
        {children}
    </Button>
)

export default function SMMNavbar(){
    return (
        <HStack w="full" maxW={'1250px'} m="auto" bg="#2F2F2F" borderRadius={"19px"} mt="37px" p="3" py="2" border="0.2px solid rgba(255,255,255,0.2)">
            <Box flex="1">
                <Logo text="Creativity Block"/>
            </Box>
            <HStack display={{base: "none", lg: "flex"}}>
                <NavButton>Process</NavButton>
                <NavButton>Benefits</NavButton>
                <NavButton>Results</NavButton>
            </HStack>
            <HStack flex="1" justifyContent="flex-end">
                <Button fontSize="13px">Schedule a consultation</Button>
                <IconButton display={{base: "flex", lg: "none"}} variant="link" fontSize="13px" aria-label={""} _active={{opacity: 0.8}}>
                    <img src={menuIcon}/>
                </IconButton>
            </HStack>
        </HStack>
    )
}