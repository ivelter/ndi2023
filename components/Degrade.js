import Slide from "./Slide";
import css from "./degreda.module.scss";

export default function Degrade({
  children,
  gradientStart = "none",
  gradientStop = "none",
  color = "#FFF",
}) {
  return (
    <Slide>
      {gradientStart != "none" && <div
        className={css.gradStart}
        style={{
          background: gradientStart,
        }}
      ></div>}
      <div
        className={gradientStart !== "none" ? css.colorBWg : css.colorBWOg}
        style={{
          backgroundColor: color,
        }}
      >
        {children}
      </div>
      {gradientStop != "none" &&<div
        className={css.gradStop}
        style={{
          background: gradientStop,
        }}
      ></div>}
    </Slide>
  );
}
