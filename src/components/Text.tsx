import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ReactNode } from 'react';
export interface TextProps{
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode; //qualquer coisa valida dentro do react
    aschild?: boolean
}

//padrão medium
export function Text({size='md', children, aschild}: TextProps){
    const Comp = aschild ?Slot : 'span'
    return(
        <Comp className={clsx(
            'text-purple-900 font-sans',
            {
                'text-xs' : size === 'sm',
                'text-sm' : size === 'md',
                'text-md' : size === 'lg',
            }
        )}>{children}</Comp>
    )
}
//com o clsx, eu digo: se a classe for 'text-xs', o texto vai ser sm (small)