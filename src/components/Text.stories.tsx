import { Text, TextProps } from "./Text";
import {Meta, StoryObj} from '@storybook/react'
//aqui tenho configurações GLOBAIS para o componente Text
export default{
    title: 'Components/Text',
    component: Text,
    //args: são as propriedades que o meu component text pode receber
    args:{
     children: 'Herllon',
     size: 'md'
    },
    //com ele consigo mudar o tamanho das varições atraves do radio button
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
    
} as Meta <TextProps>

//aqui são as variações do componente Text
//consigo ter configurações para CADA variação do componente
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args:{
        aschild: true,
        children: (
            <p>Text with P</p>
        )
    },
    //desabilitando controll e o aschild
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