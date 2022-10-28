import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { CheckBox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import Logo from "./Logo";
import "./styles/global.css";
export function App() {
  return (
    <div className="w-screen h-screen flex-col bg-pink-100 flex items-center justify-center text-purple-500">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-purple-500 mt-1">
          Faça login e começe a usar
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Digite sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />
          <Text size="sm" className="text-pink-100">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text aschild size="sm">
          <a
            href=""
            className="text-purple-900 underline hover:text-purple-500"
          >
            Esqueceu a sua senha
          </a>
        </Text>
        <Text aschild size="sm">
          <a
            href=""
            className="text-purple-900 underline hover:text-purple-500"
          >
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
