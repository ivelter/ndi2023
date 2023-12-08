/* eslint-disable react/no-unescaped-entities */
import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN2.module.scss";
import backgroundImage from "../../public/img/slide2-img.png";

export default function SN2() {
  return (
    <Degrade color={all.clair} id={2}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          position: "absolute",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "max(1080px)",
          zIndex: 0,
        }}
      />
      <div className={base.containerCitation}>
        <div className={base.citationSarkozy}>
          “On a fait une conférence sur le climat. On parle beaucoup de
          dérèglement climatique, c'est très intéressant mais ça fait 4,5
          milliards d'années que le climat change. L'homme n'est pas le seul
          responsable de ce changement” Nicolas Sarkozy
        </div>

        <div className={base.citationMitch}>
          <p>
            “Pour chaque personne qui pense que le climat se réchauffe, je peux
            trouver quelqu'un qui pense le contraire” Mitch McConnell, Sénateur
            du Kentucky
          </p>
        </div>
      </div>
    </Degrade>
  );
}
