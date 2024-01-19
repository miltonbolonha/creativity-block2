import { Box, HStack } from '@chakra-ui/react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo({text = ""}){
    return (
        <HStack as={Link} to="/">
            <Box as="img" minW={5} src={logo}></Box>
            {text ? <Box display={{base: "none", lg: "flex"}} color="white" fontWeight={600} fontSize={"18px"}>{text}</Box> : undefined}
        </HStack>
    )
}