import { Heading, HeadingProps } from "./Heading";
import {Meta, StoryObj} from '@storybook/react'
//aqui tenho configurações GLOBAIS para o componente Text
export default{
    title: 'Components/Heading',
    component: Heading,
    args:{
     children: 'Herllon',
     size: 'md'
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
    
} as Meta <HeadingProps>
//aqui são as variações do componente Text
//consigo ter configurações para CADA variação do componente
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        aschild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    //desabilitando controll 
    argTypes:{
        children:{
        control:{
            disable: true

        }
        },
        aschild:{
            table:{
                disable:true
            }
        }
    }
}