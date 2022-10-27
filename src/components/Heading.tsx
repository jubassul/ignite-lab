import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ReactNode } from 'react';
export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode; //qualquer coisa valida dentro do react
    aschild?: boolean
}

//padrão medium
export function Heading({size='md', children, aschild}: HeadingProps){
    const Comp = aschild ?Slot : 'h2'
    return(
        <Comp className={clsx(
            'text-purple-900 font-sans font-bold',
            {
                'text-lg' : size === 'sm',
                'text-xl' : size === 'md',
                'text-2xl' : size === 'lg',
            }
        )}>{children}</Comp>
    )
}
//com o clsx, eu digo: se a classe for 'text-xs', o texto vai ser sm (small)