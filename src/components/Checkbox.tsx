import {clsx} from 'clsx'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';
import { Check } from 'phosphor-react';
export interface CheckBoxProps{
    children: ReactNode; //qualquer coisa valida dentro do react
    aschild?: boolean
}

//padrão medium
export function CheckBox({ }: CheckBoxProps){
    return(
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-purple-900'>
     <CheckboxPrimitive.CheckboxIndicator asChild >
        <Check weight='bold' className='h-5 w-5 text-pink-100'/>
     </CheckboxPrimitive.CheckboxIndicator>
        </CheckboxPrimitive.Root>
    )
}
//com o clsx, eu digo: se a classe for 'text-xs', o texto vai ser sm (small)
//px para rem IMPORTANTE
//16px, se eu quero isso, tenho que fazer: 16:4 que da 4, sempre tem que da 4
//se eu quero 12px, vai ser: 12 : 3=4, tenho que usar 3rem então
//utilizamos padrão de multiplos de 4 