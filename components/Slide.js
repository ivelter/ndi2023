import base from "./slide.module.scss"

export default function Slide({ children }) {
    return <div className={base.slide}>{children}</div>;
}
  