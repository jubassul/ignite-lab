import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; //qualquer coisa valida dentro do react
  aschild?: boolean;
}

//padrão medium
export function Button({
  children,
  aschild,
  className,
  ...props
}: ButtonProps) {
  const Comp = aschild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-purple-900 rounded font-semibold text-pink-100 text-sm w-full  transition-purple hover:bg-purple-500",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
//com o clsx, eu digo: se a classe for 'text-xs', o texto vai ser sm (small)
//px para rem IMPORTANTE
//16px, se eu quero isso, tenho que fazer: 16:4 que da 4, sempre tem que da 4
//se eu quero 12px, vai ser: 12 : 3=4, tenho que usar 3rem então
//utilizamos padrão de multiplos de 4
