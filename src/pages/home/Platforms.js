import Platforms from "../../components/Platforms";
import canva from "../../assets/logos/canva.png"
import clarity from "../../assets/logos/clarity.png"
import figma from "../../assets/logos/figma.png"
import ga4 from "../../assets/logos/ga4.png"
import ig from "../../assets/logos/ig.png"
import shopify from "../../assets/logos/shopify.png"
import vwo from "../../assets/logos/vwo.png"
import wc from "../../assets/logos/wc.png"
import wix from "../../assets/logos/wix.png"

const Logos = [
    {src: canva},
    {src: clarity},
    {src: figma},
    {src: ga4},
    {src: ig},
    {src: vwo},
    {src: wc},
    {src: wix},
    {src: shopify},
]

export default function CROPlatforms(){
    return <Platforms data={Logos} spacing={6} size={"140px"}/>
}