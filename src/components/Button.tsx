import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  appearance?: "primary" | "secondary";
  size?: "md" | "sm";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export function Button({
  appearance = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const classes = `btn btn-${appearance} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} onClick={props.onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
