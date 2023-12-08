import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import Image from "next/image"
import base from "./SN12.module.scss"
import FlecheSuiv from "../FlecheSuiv"

export default function SN12() {
    return (
        <Degrade color={all.noir} gradientStart={all["gradientM-N"]}>

            <div className={base.centerDiv}>

                <div className={base.parent}>
                    <Image src="/img/feu.jpg" alt="Une photo d'un feu placé au centre de l'écran." layout="fill" className={base.image}/>
                </div>

            </div>

        </Degrade>
    )
}