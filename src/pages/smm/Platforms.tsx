import Platforms from "../../components/Platforms";
import margou from "../../assets/logos/SMM/casa_margou.png"
import creativity from "../../assets/logos/SMM/creativity.png"
import bhout from "../../assets/logos/SMM/bhout.png"
import rockschool from "../../assets/logos/SMM/rockschool.png"
import dafonte from "../../assets/logos/SMM/plantas_dafonte.png"
import protema from "../../assets/logos/SMM/protema.png"
import serviben from "../../assets/logos/SMM/serviben.png"
import viaexpress from "../../assets/logos/SMM/viaexpress.png"

const Logos = [
    {src: margou},
    {src: creativity},
    {src: bhout},
    {src: rockschool},
    {src: dafonte},
    {src: protema},
    {src: serviben},
    {src: viaexpress},
]

export default function SMMPlatforms(){
    return <Platforms title="Trusted Clients" data={Logos} size="140px"/>
}