import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import base from "./SN16.module.scss"

export default function SN16() {
    return (
        <Degrade color="#2E3033">
            <div className={base.containerLink}>
                <div className={base.partiGauche}>
                    <div><a href="">Les fakes new</a></div>
                    <div><a href="">Comment lutter contre</a></div>
                    <div><a href="">Les petites actions qui comptent</a></div>
                </div>

                <div className={base.partiDroite}>
                    <div><a href="">Les fakes new</a></div>
                    <div><a href="">Comment lutter contre</a></div>
                    <div><a href="">Les petites actions qui comptent</a></div>
                </div>

                <div className={base.easterEggSlide16}>psst. pensez à cliquer sur le soleil au début.</div>
            </div>
        </Degrade>
    )
} 