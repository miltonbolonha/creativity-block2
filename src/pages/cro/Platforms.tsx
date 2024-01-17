import chipset from "../../assets/logos/CRO/chipset.png"
import excusemi from "../../assets/logos/CRO/excusemi.png"
import ikea from "../../assets/logos/CRO/ikea.png"
import pony from "../../assets/logos/CRO/pony.png"
import stella from "../../assets/logos/CRO/stella.png"
import stock from "../../assets/logos/CRO/stock.png"
import creativity from "../../assets/logos/CRO/creativity.png"
import conquest from "../../assets/logos/CRO/conquest-maps.png"
import buddha from "../../assets/logos/CRO/buddha.png"
import Platforms from "../../components/Platforms";

const Logos = [
    {src: chipset},
    {src: excusemi},
    {src: ikea},
    {src: pony},
    {src: stella},
    {src: stock},
    {src: creativity},
    {src: conquest},
    {src: buddha},
]

export default function CROPlatforms(){
    return <Platforms data={Logos} size={"200px"}/>
}