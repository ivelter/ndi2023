import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN16.module.scss";

const DangerousRawHtml = ({ html = "" }) => (
  <script dangerouslySetInnerHTML={{ __html: `${html}` }} />
);

export default function SN16() {
  return (
    <Degrade color="#2E3033" id={16}>
      <div className={base.containerLink}>
        <div className={base.partiGauche}>
          <div>
            <a href="https://www.natura-sciences.com/comprendre/5-fake-news-rechauffement-climatique.html" target="_blank">Les fakes new</a>
          </div>
          <div>
            <a href="https://www.exteriores.gob.es/fr/PoliticaExterior/Paginas/LaLuchaContraLaDesinformacion.aspx#:~:text=Pour%20combattre%20la%20d%C3%A9sinformation%2C%20il,faits%20et%20les%20institutions%20acad%C3%A9miques." target="_blank">Comment lutter contre</a>
          </div>
          <div>
            <a href="">Les petites actions qui comptent</a>
          </div>
        </div>

        <div className={base.partiDroite}>
          <div>
            <a href="https://okaydoc.fr/climat-connaitre-ces-5-chercheurs-est-primordial" target="_blank">Les spécialistes connues</a>
          </div>
          <div>
            <a href="https://www.ipcc.ch/languages-2/francais/" target="_blank">GIEC</a>
          </div>
          <div>
            <a href="https://reseauactionclimat.org/synthese-du-rapport-du-giec-lurgence-climatique-est-la-les-solutions-aussi/#:~:text=Le%20GIEC%20rapporte%20que%20les,de%20mani%C3%A8re%20disproportionn%C3%A9e%20aux%20%C3%A9missions.&text=Les%2010%20%25%20de%20m%C3%A9nages%20ayant,gaz%20%C3%A0%20effet%20de%20serre." target="_blank">Article du Giec</a>
          </div>
        </div>

        <div className={base.easterEggSlide16}>
          psst. pensez à cliquer sur le soleil au début.
        </div>
      </div>
      <DangerousRawHtml
        html={`<!--
            
            __   __ _______ ______   _______ ___   _______ __   __ __   __ __   __ __   __ _______   __  
            |  |_|  |       |    _ | |       |   | |       |  | |  |  | |  |  |_|  |  | |  |       | |  | 
            |       |    ___|   | || |       |   | |_     _|  |_|  |  | |  |       |  | |  |  _____| |  | 
            |       |   |___|   |_||_|       |   |   |   | |       |  |_|  |       |  |_|  | |_____  |  | 
            |       |    ___|    __  |      _|   |   |   | |       |       |       |       |_____  | |__| 
            | ||_|| |   |___|   |  | |     |_|   |   |   | |   _   |       | ||_|| |       |_____| |  __  
            |_|   |_|_______|___|  |_|_______|___|   |___| |__| |__|_______|_|   |_|_______|_______| |__| 
            
            -->`}
      />
    </Degrade>
  );
}
