import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import FlecheSuiv from "../FlecheSuiv"
import base from "./SN11.module.scss"

import { Lato } from 'next/font/google'
const fontLato  = Lato({style : ['italic'], subsets : ['latin'], weight : ['400']})

import { Quicksand } from "next/font/google"
const fontQuicksand = Quicksand({weight :  ['500'], subsets : ['latin']})





export default function SN11() {
    return (
        <Degrade color={all.marron} gradientStart={all["gradientVTR-M"]}>

            <div className={base.conteneur}>

                <div className={base.d1}>
                    <p className={`${fontLato.className}`}>
                        jsp écoutez le giec les cop (les conférences pas les flics on dit acab ici) jsp au lieu de sucer trump et zemour
                    </p>

                </div>

                <div className={base.d2}>
                    <div className={` ${base.dansD2elt1} ${fontQuicksand.className}`}>
                        <a href="https://macron.fun">
                        Combattre les fausses informations
                        </a>
                    
                    </div>
                
                    <div className={base.dansD2elt2} >
                        <FlecheSuiv></FlecheSuiv>
                    </div>
                </div>

            </div>

        </Degrade>
    )
} 