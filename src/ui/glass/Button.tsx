import type { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const base =
  "inline-flex items-center justify-center rounded-full transition-all font-medium backdrop-blur-[var(--glass-blur)]";

const variants: Record<ButtonVariant, string> = {
  primary: "btn-liquid-gold",
  ghost: "border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg)]/80",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
    </button>
  );
}
