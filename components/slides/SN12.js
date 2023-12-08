import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import Image from "next/image"
import base from "./SN12.module.scss"
import FlecheSuiv from "../FlecheSuiv"

export default function SN12() {
    return (
        <Degrade color={all.noir} gradientStart={all["gradientM-N"]}>
            <div className={base.centerDiv}>
                <Image src="/img/feu.jpg" alt="Une photo d'un feu placé au centre de l'écran."
                       width="700" height="700"/>
                <FlecheSuiv></FlecheSuiv>
            </div>
        </Degrade>
    )
}