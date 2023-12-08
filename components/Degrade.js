import FlecheSuiv from "./FlecheSuiv";
import Slide from "./Slide";
import css from "./degreda.module.scss";

export default function Degrade({
  children,
  gradientStart = "none",
  gradientStop = "none",
  color = "#FFF",
}) {
  const taille =
    gradientStart == "none" && gradientStop == "none"
      ? css.colorBWOg
      : gradientStart == "none" || gradientStop == "none"
        ? css.colorBWSg
        : css.colorBWg;
  const ldiv = (
    <div
      className={taille}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
      <FlecheSuiv />
    </div>
  );

  return (
    <Slide>
      {gradientStart != "none" && (
        <div
          className={css.gradStart}
          style={{
            background: gradientStart,
          }}
        ></div>
      )}
      {ldiv}
      {gradientStop != "none" && (
        <div
          className={css.gradStop}
          style={{
            background: gradientStop,
          }}
        ></div>
      )}
    </Slide>
  );
}
