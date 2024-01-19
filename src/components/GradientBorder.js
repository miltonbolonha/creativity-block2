import { Box } from "@chakra-ui/react";

export default function GradientBorder({variant, rounded = false, ...rest}){
    return <Box className={variant} position="absolute" top="0" left="0" right="0" bottom="0" rounded={rounded ? "full" : undefined} {...rest}/>
}