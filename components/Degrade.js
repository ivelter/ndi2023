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
      <div
        className={css.gradStart}
        style={{
          background: gradientStart,
        }}
      ></div>
      <div
        className={css.gradStart !== "none" ? css.colorBWg : css.colorBWOg}
        style={{
          backgroundColor: color,
        }}
      >
        {children}
      </div>
      <div
        className={css.gradStop}
        style={{
          background: gradientStop,
        }}
      ></div>
    </Slide>
  );
}
