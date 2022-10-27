import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
// importando as propriedades do input do html, ex: placeholder

//fazendo um input com 2 componentes juntos

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className=" flex items-center h-12 gap-3 py-4 px-3 bg-purple-500 rounded w-full   focus-within:ring-2 ring-pink-100 ">
      {props.children}
    </div>
  );
}

export interface TextInputIconProps{
children: ReactNode
}

function TextInputIcon(props: TextInputIconProps){
return(
    <Slot className="w-6 h-6 text-purple-900 ">
      {props.children}
    </Slot>
)
}
TextInputIcon.displayName='TextInputIcon'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-purple-900 text-xs placeholder:text-purple-900 outline-none"
      {...props}
    />
  );
}
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
