import { Button, ButtonProps } from "./Button";
import {Meta, StoryObj} from '@storybook/react'
//aqui tenho configurações GLOBAIS para o componente Button
export default{
    title: 'Components/Button',
    component: Button,
    //args: são as propriedades que o meu component Button pode receber
    args:{
     children: 'Create account',
    },
    //com ele consigo mudar o tamanho das varições atraves do radio button
    argTypes:{
    }
    
} as Meta <ButtonProps>

//aqui são as variações do componente Button
//consigo ter configurações para CADA variação do componente
export const Default: StoryObj<ButtonProps> = {}


        