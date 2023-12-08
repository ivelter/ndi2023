import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import FlecheSuiv from "../FlecheSuiv"
import Image from "next/image"
import base from "./SN2.module.scss"

export default function SN2() {
    return (
        <Degrade color={all.clair}>
            <div className={base.containerCitation}>
                <div className={base.citationSarkozy}>“On a fait une conférence sur le climat. On parle beaucoup de 
                    dérèglement climatique, c'est très intéressant mais ça fait 4,5 milliards d'années que le climat change. 
                    L'homme n'est pas le seul responsable de ce changement”
                    Nicolas Sarkozy
                </div>

                <div className={base.citationMitch}>
                    <p>
                        “Pour chaque personne qui pense que le climat se réchauffe, je 
                        peux trouver quelqu'un qui pense le contraire”
                        Mitch McConnell, Sénateur du Kentucky
                    </p>
                </div>
            </div>
            <Image src="/img/slide2-img.png" alt="Une illustration simple du soleil, placée dans le coin supérieur gauche de l'écran."
            width="179" height="179"/>
        </Degrade>
    )
} 