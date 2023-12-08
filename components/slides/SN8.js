import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import { Lato } from 'next/font/google'
const fontLato  = Lato({style : ['italic'], subsets : ['latin'], weight : ['400']})
import { Quicksand } from "next/font/google"
const fontQuicksand = Quicksand({weight :  ['400'], subsets : ['latin']})


export default function SN8() {
    return (
        <Degrade color={all["vert-tres-clair"]}>
            <h1 className={`${fontQuicksand.className} `}>Eh bien... non</h1>
            <div>
                <p>
                Même si l’urgence est bien réelle,même si le danger d’un point de non retour est proche,il est important de se rappeler que tout ce que l’on voitn’est pas la vérité.
                </p>
                <p>
                Ensemble, nous pouvons avancer à l’échelle de chacuntout en apprenant à distinguer le vrai du faux.
                </p>
            </div>
            
        </Degrade>
    )
} 