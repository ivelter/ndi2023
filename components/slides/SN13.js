import all from "../../variables.module.scss";
import Degrade from "../Degrade";
import base from "./SN13.module.scss";

export default function SN13() {
  return (
    <Degrade color={all.noir} id={13}>
      <div className={base.divRoot}>
        <h1>Dans une telle situation d&apos;urgence, il faut agir.</h1>
      </div>
    </Degrade>
  );
}
