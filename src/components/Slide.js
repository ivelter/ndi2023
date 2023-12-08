import base from "./slide.module.scss";

export default function Slide({ children, id }) {
  return <div id={id} className={base.slide}>{children}</div>;
}
