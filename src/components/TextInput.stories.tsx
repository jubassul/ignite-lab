import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";
import { Meta, StoryObj } from "@storybook/react";
//aqui tenho configurações GLOBAIS para o componente TextInput
export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  //args: são as propriedades que o meu component TextInput pode receber
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail" />
      </>
    ),
  },
  //com ele consigo mudar o tamanho das varições atraves do radio TextInput
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

//aqui são as variações do componente TextInput
//consigo ter configurações para CADA variação do componente
export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail" />,
  },
};
