import base from "./flechesuiv.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function FlecheSuiv(hrefSuivant = 0) {
  return (
    <div className={base.FlecheSuiv}>
      <Link href={hrefSuivant}>
        <Image
          src="/img/downarrow.png"
          alt="Flèche vers le bas"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
