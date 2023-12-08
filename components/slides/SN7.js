import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import base from "./SN7.module.scss"
import sn1css from "./SN1.module.scss"

export default function SN7() {
    return (
        <Degrade color="#fff" gradientStart={all["gradientMC-B"]} gradientStop={all["gradientB-VTC"]}>
            <div className={sn1css.centerDiv}>
                <div className={base.centerDiv}>
                    <h1>
                        Mais on va tous mourir si ça continue!
                    </h1>
                </div>
            </div>
        </Degrade>
    )
} 