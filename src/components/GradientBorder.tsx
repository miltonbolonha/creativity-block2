import { Box } from "@chakra-ui/react";

type Variants = "gradientCard" | "gradient-border-orange" | "gradient-border-gray" | "gradientCardSmall"

export default function GradientBorder({variant, rounded = false, ...rest} : {variant: Variants, rounded?: boolean, borderWidth?: number}){
    return <Box className={variant} position="absolute" top="0" left="0" right="0" bottom="0" rounded={rounded ? "full" : undefined} {...rest}/>
}