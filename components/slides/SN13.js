import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import FlecheSuiv from "../FlecheSuiv"
import base from "./SN13.module.scss"

export default function SN13() {
    return (
        <Degrade color={all.noir}>
            <div className={base.divRoot}>
                <h1>
                    Dans une telle situation d&apos;urgence, il faut agir.
                </h1>
                <div>
                    <FlecheSuiv></FlecheSuiv>
                </div>
            </div>
        </Degrade>
    )
} 