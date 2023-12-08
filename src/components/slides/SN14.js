import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN14.module.scss";
import Link from "next/link";

export default function SN14() {
  return (
    <Degrade color={all.gris} id={14}>
      <div className={base.divRoot}>
        <h1>Mais dans l&apos;urgence, il faut surtout garder son <Link href={"/conseils"}><span className={"text-white"}>calme</span></Link>.</h1>
        <div className={base.textclass}>
          <p className={base.txt}>
            Effectuez des actions à votre échelle. Parlez en à vos proches.
            Participez à des initiatives collectives. Chaque geste compte, et vous
            n&apos;avez pas besoin de faire de sacrifices pour faire la
            différence.
          </p>
          <p className={base.txt}>
            (Oui effectivement, cela veut dire que vous n&apos;avez pas besoin d&apos;écouter
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
