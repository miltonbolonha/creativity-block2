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

export default function CRONavbar(){
    return (
        <HStack w="80%" m="auto" bg="#2F2F2F" borderRadius={"19px"} mt="37px" p="3" py="2" border="0.2px solid rgba(255,255,255,0.2)">
            <Box flex="1">
                <Logo text="Creativity Block"/>
            </Box>
            <HStack display={{base: "none", lg: "flex"}}>
                <a href="#pricing"><NavButton>Pricing</NavButton></a>
                <a href="#process"><NavButton>Process</NavButton></a>
                <a href="#benefits"><NavButton>Benefits</NavButton></a>
                <a href="#services"><NavButton>Services</NavButton></a>
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