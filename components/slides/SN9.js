import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN9.module.scss";
import Image from "next/image";

export default function SN9() {
  return (
    <Degrade color={all["vert-tres-clair"]}>
      <div className={base.divRacine}>
        <h1>Mais... comment?</h1>
        <div>
          Tout d&apos;abord, il faut penser à toujours vérifier d&apos;où vient
          une information. Pensez à checker:
          <ul>
            <li>➥ L&apos;auteur</li>
            <li>➥ La ou les sources</li>
            <li>➥ La date de publication de l&apos;article</li>
            <li>
              ➥ Eventuellement, la réputation de la source de l&apos;information
              sur Internet
            </li>
          </ul>
          Mais, évidemment, ce n&apos;est pas toujours aussi facile que ça en a
          l&apos;air...
        </div>
        <div className={base.centerDiv}>
          <Image
            src="/img/factCheck.png"
            alt="illustration fact checking"
            width={256}
            height={256}
          />
        </div>
      </div>
    </Degrade>
  );
}
