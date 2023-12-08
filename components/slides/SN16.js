import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN16.module.scss";

const DangerousRawHtml = ({ html = "" }) => (
  <script dangerouslySetInnerHTML={{ __html: `${html}` }} />
);

export default function SN16() {
  return (
    <Degrade color="#2E3033">
      <div className={base.containerLink}>
        <div className={base.partiGauche}>
          <div>
            <a href="">Les fakes new</a>
          </div>
          <div>
            <a href="">Comment lutter contre</a>
          </div>
          <div>
            <a href="">Les petites actions qui comptent</a>
          </div>
        </div>

        <div className={base.partiDroite}>
          <div>
            <a href="">Les spécialistes connues</a>
          </div>
          <div>
            <a href="">GIEC</a>
          </div>
          <div>
            <a href="">Article et interview</a>
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
