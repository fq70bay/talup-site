import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "whatsapp";
};

const styles = {
  primary:
    "bg-[#C99B3C] text-white border-[#C99B3C] hover:bg-[#b58a32] hover:border-[#b58a32]",
  secondary:
    "bg-transparent text-[#082E63] border-[rgba(8,46,99,0.18)] hover:border-[#C99B3C] hover:text-[#071B33]",
  dark:
    "bg-white text-[#071B33] border-white hover:bg-[#F7F7F5] hover:border-[#F7F7F5]",
  whatsapp:
    "bg-[#25D366] text-[#06351D] border-[#25D366] hover:bg-[#1DB954] hover:border-[#1DB954]",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
