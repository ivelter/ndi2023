import Slide from "./Slide"

export default function Degrade({ children, gradientStart = null, gradientStop = null, color }) {
    return <Slide>
      <div className={gradientStart}></div>
      <div className={color}>{children}</div>
      <div className={gradientStop}></div>
    </Slide>;
}