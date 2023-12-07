import all from "../../variables.module.scss"
import Degrade  from "../Degrade"
import Image from "next/image"
import base from "./SN1.module.scss"
import FlecheSuiv from "../FlecheSuiv"

export default function SN1() {
    return (
        <Degrade color={all.clair}>
            <Image src="/img/soleilCoin.png" alt="Une illustration simple du soleil, placée dans le coin supérieur gauche de l'écran."
            width="179" height="179"/>
            <h1>
                Le réchauffement climatique <b className="text-[#10AB1F]">n’existe pas</b>!
            </h1>
            <FlecheSuiv></FlecheSuiv>
        </Degrade>
    )
} 