export function Layer({ children, className = "" }) {
  return (
    <div className={"rounded-2xl border bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 " + className}>
      {children}
    </div>
  );
}
