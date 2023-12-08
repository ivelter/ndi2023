import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN10.module.scss";

export default function SN10() {
  return (
    <Degrade
      gradientStart={all["vert-tres-clair"]}
      gradientStop={all.marron}
      color={all.marron}
      id={10}
    >
      {/* TODO: réparer le gradient par ici */}
      <div className={base.divRacine}>
        <h2>
          Saviez-vous par exemple que le soleil n&apos;est pas un facteur du
          réchauffement climatique?
        </h2>
        <p>
          Cela peut paraitre logique pour certains, une évidence pour
          d&apos;autres, mais beaucoup penseraient que cette information est
          vraie. En effet, selon
          <a href="https://meteofrance.com/actualites-et-dossiers/entretiens/quelles-sont-les-fake-news-les-plus-repandues-sur-le-climat">
            Météo-France
          </a>
          , ce facteur pourrait être effectivement pris en compte... seulement
          s&apos;il n&apos;était pas des dizaines de fois moins influent que
          l&apos;accumulation des gaz à effet de serre.
        </p>
        <p>
          Dans ce même article, Météo-France en profite pour <i>debunk</i> de
          nombreuses autres fake news: le fait que la planète aurait connu pire,
          ou bien encore que c&apos;est un complot politique...
        </p>
      </div>
    </Degrade>
  );
}
