import React, { HTMLAttributes } from "react";

type ButtonProps = React.DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-2 py-2 rounded-md bg-green-700 text-white font-semibold"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
