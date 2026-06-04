import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  // Classes de base communes à toutes les variantes
  const baseClasses = `
    inline-flex items-center justify-center
    px-6 py-3
    rounded-xl
    whitespace-nowrap
    font-medium text-lg
    transition-all duration-200
    cursor-pointer
    capitalize
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  // Classes spécifiques par variante
  const variantClasses = {
    primary: `
      text-inverse-foreground
      hover:bg-primary/80
      focus:ring-primary
      bg-primary
    `,
    outline: `
      bg-secondary-card text-black
      border-2 border-border
      hover:border-primary hover:text-primary
      focus:ring-primary
    `,
  };

  // on combine toutes les classes
  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  // Si href est fourni, on rend un Link
  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Sinon, on rend un button
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
