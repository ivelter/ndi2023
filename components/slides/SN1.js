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
            <div className={base.centerDiv}>
                <h1 className={base.blackText}>
                    Le réchauffement climatique <b className={base.heroText}>n’existe pas</b>!
                </h1>
                {/* TODO: ajouter le lien vers SN2 */}
                <FlecheSuiv></FlecheSuiv> 
            </div>
        </Degrade>
    )
} 