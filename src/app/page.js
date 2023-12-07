import Degrade from "../../components/Degrade";
import base from "./principal.module.scss";



export default function Home() {
  return (
    <main>
      <Degrade color={base}>hello</Degrade>
    </main>
  );
}
