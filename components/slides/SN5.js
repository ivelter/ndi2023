/* eslint-disable react/no-unescaped-entities */
import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import base from "./SN5.module.scss"
import FlecheSuiv from "../FlecheSuiv";

export default function SN5() {
    return (
        <Degrade color={all["marron-clair"]}>
            <div className={base.centerDiv}>
                <h1> Le <b>changement climatique</b> est une réalité qui n'est plus à <b className={base.redText}> démontrer </b>.</h1>
                <b className={base.leftText}> <b className={base.souligner}> Les scientifiques du GIEC sont catégoriques :</b> <br></br>"les activités humaines, principalement par le biais des émissions de gaz à effet de serre, ont sans équivoque provoqué la réchauffement de la planète"</b>
                <h1><b>Alors, comment réagir face à l'urgence?</b></h1>
                <FlecheSuiv></FlecheSuiv>
            </div>
        </Degrade>
    )
} 