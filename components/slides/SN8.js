import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN8.module.scss";

import { Lato } from "next/font/google";
const fontLato = Lato({ subsets: ["latin"], weight: ["400"] });
import { Quicksand } from "next/font/google";
const fontQuicksand = Quicksand({ weight: ["700"], subsets: ["latin"] });

export default function SN8() {
  return (
    <Degrade color={all["vert-tres-clair"]} id={8}>
      <div>
        <h1 className={`${fontQuicksand.className} ${base.texteHaut}`}>
          Eh bien... non
        </h1>

        <div className={base.conteneurCentre}>
          <p className={`${base.paragraphe} ${fontLato.className}`}>
            Même si l’urgence est bien réelle, même si le danger d’un point de
            non retour est proche, il est important de se rappeler que tout ce
            que l’on voit n’est pas la vérité.
          </p>

          <p className={`${base.paragraphe} ${fontLato.className}`}>
            Ensemble, nous pouvons avancer à l’échelle de chacun tout en
            apprenant à distinguer le vrai du faux.
          </p>
        </div>
      </div>
    </Degrade>
  );
}
