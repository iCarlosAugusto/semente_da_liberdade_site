import { Box } from "@chakra-ui/react";
import { ButtonComponent } from "../components/Button";
import { InputComponent } from "../components/Input";
import { TextComponent } from "../components/Text";

function Register() {
    return (
        <Box paddingLeft={16} paddingRight={16}>
            <TextComponent text="Crie sua conta!" fontSize="5xl" />

            <InputComponent placeholder="Nome de usuário"/>
            <InputComponent placeholder="Email"/>
            <InputComponent placeholder="Senha"/>

            <ButtonComponent value="Criar conta"/>

            <TextComponent text="Já tem uma conta? Faça o login"/>
        </Box>

    )
}

export default Register;