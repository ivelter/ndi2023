import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN3.module.scss";
import { Lato } from "next/font/google";
const fontLato = Lato({
  style: ["italic"],
  subsets: ["latin"],
  weight: ["400"],
});

export default function SN3() {
  return (
    <Degrade color={all.vert}>
      <div className={`${base.divCentre} ${fontLato.className} `}>
        <p className={base.citation}>
          “Le concept du réchauffement climatique a été créé par et pour les
          Chinois, pour rendre l’industrie américaine moins compétitive.”
        </p>
        <p className={base.auteur}>Donald Trump</p>
      </div>
    </Degrade>
  );
}
