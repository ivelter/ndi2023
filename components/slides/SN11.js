/* eslint-disable react/no-unescaped-entities */
import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN11.module.scss";

import { Lato } from "next/font/google";
const fontLato = Lato({
  style: ["italic"],
  subsets: ["latin"],
  weight: ["400"],
});

import { Quicksand } from "next/font/google";
const fontQuicksand = Quicksand({ weight: ["500"], subsets: ["latin"] });

export default function SN11() {
  return (
    <Degrade color={all.marron} gradientStart={all["gradientVTR-M"]}>
      <div className={base.conteneur}>
        <div className={base.d1}>
          <p className={`${fontLato.className}`}>
            Luttons ensemble contre la désinformation !
          </p>
          <p className={`${fontLato.className}`}>
            Il existe une grande variété de faits concernant le réchauffement
            climatique étant encore inconnus du grand public, il est essentiel
            d'être informé sur ces sujets pour un avenir plus sain
          </p>
          <p className={`${fontLato.className}`}>
            Certains sites comme ceux d'organisations spécialisées dans les
            études climatiques comme le GIEC sont des sources fiables pour
            récolter des informations sur les enjeux actuels liés au climat.
          </p>
        </div>

        <div className={base.d2}>
          <div className={` ${base.dansD2elt1} ${fontQuicksand.className}`}>
            <a href="https://www.ecologie.gouv.fr/publication-du-6e-rapport-synthese-du-giec">
              Cliquez pour combattre la désinformation
            </a>
          </div>
        </div>
      </div>
    </Degrade>
  );
}
