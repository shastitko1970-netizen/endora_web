export function Panel({ children, className = "" }) {
  return (
    <div className={"p-6 rounded-2xl border bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] shadow-xl " + className}>
      {children}
    </div>
  );
}
