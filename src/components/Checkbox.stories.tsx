import { CheckBox, CheckBoxProps } from './Checkbox';
import {Meta, StoryObj} from '@storybook/react'
import {Text} from './Text'
//aqui tenho configurações GLOBAIS para o componente CheckBox
export default{
    title: 'Components/CheckBox',
    component: CheckBox,
    //args: são as propriedades que o meu component CheckBox pode receber
    args:{
    },
    //com ele consigo mudar o tamanho das varições atraves do radio CheckBox
    argTypes:{
    },
    decorators:[
        (Story) =>{
            return(
                <div className='flex items-center gap-2'>
                {Story()}
                <Text size='sm'>Lembra-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]
    
} as Meta <CheckBoxProps>

//aqui são as variações do componente Button
//consigo ter configurações para CADA variação do componente
export const Default: StoryObj<CheckBoxProps> = {}


         