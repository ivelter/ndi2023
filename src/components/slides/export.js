import SN1 from "./SN1";
import SN2 from "./SN2";
import SN3 from "./SN3";
import SN4 from "./SN4";
import SN5 from "./SN5";
import SN6 from "./SN6";
import SN7 from "./SN7";
import SN8 from "./SN8";
import SN9 from "./SN9";
import SN10 from "./SN10";
import SN11 from "./SN11";
import SN12 from "./SN12";
import SN13 from "./SN13";
import SN14 from "./SN14";
import SN15 from "./SN15";
import SN16 from "./SN16";

const list = [
  SN1,
  SN2,
  SN3,
  SN4,
  SN5,
  SN6,
  SN7,
  SN8,
  SN9,
  SN10,
  SN11,
  SN12,
  SN13,
  SN14,
  SN15,
  SN16,
];

export default function Slides() {
  return (
    <>
      {list.map((Comp, i) => {
        return <Comp key={i}/>
      })}
    </>
  );
}
