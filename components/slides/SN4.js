import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import FlecheSuiv from "../FlecheSuiv"
import base from "./SN4.module.scss"
import sn1css from "./SN1.module.scss"

export default function SN4() {
    return (
        <Degrade color={all.noir} gradientStart={all["gradientC-N"]} gradientStop={all["gradientN-MC"]}>
            <div className={sn1css.centerDiv}>
                <div className={base.centerDiv}>
                    <h1 className={base.blackText}>
                        Croyez-vous vraiment à 
                        <b className={sn1css.heroText}> tout cela?</b>
                    </h1>
                    <FlecheSuiv></FlecheSuiv>
                </div>
            </div>
        </Degrade>
    )
} 