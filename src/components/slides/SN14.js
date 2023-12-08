import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN14.module.scss";
import Link from "next/link";

export default function SN14() {
  return (
    <Degrade color={all.gris} id={14}>
      <div className={base.divRoot}>
        <h1>Mais dans l&apos;urgence, il faut surtout garder son <span className={"text-white"}>calme</span>.</h1>
        <div className={base.textclass}>
          <p>
            Effectuez des actions à <span className={"text-white"}>votre échelle</span>. Parlez en à vos proches.
            Participez à des <span className={"text-white"}>actions collectives</span>. Chaque action compte, et vous
            n&apos;avez pas besoin de faire de sacrifices pour faire la
            différence.
          </p>
          <p>
            (oui, cela veut dire que vous n&apos;avez pas besoin d&apos;écouter
            un certain politicien qui nous a tous conseillé d&apos;uriner sous
            la douche.)
          </p>
        </div>
        <div className={base.linkclass}>
          <Link href="/">Les solutions à adopter</Link>
        </div>
      </div>
    </Degrade>
  );
}
