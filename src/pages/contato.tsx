import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, Divider, Flex, HStack, Icon, IconButton, ScaleFade, SimpleGrid, Slider, Stack, Textarea, useDisclosure, useStatStyles, Wrap } from "@chakra-ui/react";
import { ButtonComponent } from "../components/Button";
import { InputComponent } from "../components/Input";
import { TextComponent } from "../components/Text";
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { useState } from "react";
import { Formik } from "formik/dist/Formik";

export default function Contato() {


    return (
        <Box paddingLeft={8} paddingRight={8} paddingTop={32}>
            <TextComponent text="Fale conosco" fontSize={'6xl'} />

            <TextComponent text="Envie um email ou nos contate nas redes sociais para sugestões, criticas, parcerias ou outros assuntos" />

            <Flex dir="row" justifyContent={'space-between'}>


                <SimpleGrid columns={2} spacingX='40px' spacingY='20px' width={'700px'} marginTop={16} alignSelf='start'>
                    <InputComponent placeholder="Qual seu nome?" variant="flushed" />
                    <InputComponent placeholder="Qual seu email?" variant="flushed" />
                    <Textarea isInvalid placeholder='Here is a sample placeholder' />
                    <ButtonComponent value="Enviar email" marginTop={16} onClick={() => console.log('a')} />
                </SimpleGrid>

                <Box h={'500px'} w={'600px'} bg='blackAlpha.700' padding={16}>
                    <TextComponent text="Contato" color="white" fontWeight="bold" fontSize={'3xl'} />
                    <Box marginTop={2} marginBottom={6}>
                        <TextComponent text="Geral: semente@gmail.com" fontSize={'xl'} color='white' />
                        <TextComponent text="Parcerias: parcerias@gmail.com" fontSize={'xl'} color='white' />
                        <TextComponent text="Whatsapp: (62) 982399-9800" fontSize={'xl'} color='white' />
                    </Box>

                    <Divider />
                    <TextComponent text="Redes sociais" color="white" fontWeight="bold" fontSize={'3xl'} marginTop={6} />
                    <Wrap spacing={2} marginTop={2}>
                        <IconButton
                            colorScheme={'blackAlpha'}
                            aria-label='Send email'
                            icon={<IoLogoLinkedin color="white" />}
                        />

                        <IconButton
                            colorScheme={'blackAlpha'}
                            aria-label='Send email'
                            icon={<IoLogoWhatsapp color="white" />}
                        />

                        <IconButton
                            colorScheme={'blackAlpha'}
                            aria-label='Send email'
                            icon={<IoLogoInstagram color="white" />}
                        />
                    </Wrap>
                </Box>
            </Flex>


        </Box>
    )
}
