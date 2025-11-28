export function Aura({ size = 300, color = "#d8b56a", opacity = 0.18, className = "" }) {
  return (
    <div
      className={"absolute rounded-full blur-3xl pointer-events-none " + className}
      style={{
        width: size,
        height: size,
        background: color,
        opacity: opacity,
      }}
    />
  );
}
