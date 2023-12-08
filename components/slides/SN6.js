import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import FlecheSuiv from "../FlecheSuiv"
import base from "./SN6.module.scss"

export default function SN6() {
    return (
        <Degrade color={all["marron-clair"]}>
            <div>
                <p className={base.q1}>
                    Comment distinguer la vérité du faux dans un flux constant de fausses informations?
                </p>
            </div>
            <div>
                <p className={base.q2}>
                    Comment mes actions vont-elles changer le monde?
                </p>
            </div>
            <div>
                <p className={base.q3}>
                    Puis-je vraiment changer les choses?
                </p>
            </div>
            <div>
                <p className={base.q4}>
                    Comment ne pas se sentir perdu face à une telle situation?
                </p>
            </div>
            <div>
                <p className={base.q5}>
                    Est-ce que tout ça vaut vraiment la peine?
                </p>
            </div>
            <div className={base.align}>
                <FlecheSuiv></FlecheSuiv>
            </div>
        </Degrade>
    )
} 