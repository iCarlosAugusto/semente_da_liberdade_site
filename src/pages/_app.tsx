import { Box, ButtonGroup, ChakraProvider, Flex, HStack, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, VStack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { FaFacebook, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex w='100%' bg={'red.50'} paddingLeft={8} paddingRight={8} justifyContent={'space-between'} align={'center'}>
        <Stack direction={'row'} align={'center'} spacing={20}>
          <Image

            boxSize={150}
            src='https://camo.githubusercontent.com/5c9a8022c5b6a9c7204ca285ea50af4c47b62b64ea601b25f01367ca9227369b/68747470733a2f2f7777772e73656d656e746564616c69626572646164652e636f6d2e62722f696d616765732f53444c2d30352e706e67'
            alt='Semente logo'
          />
          <Link>
            Sobre
          </Link>
          <Link>
            Quem somos
          </Link>

          <Link>
            Contato
          </Link>

          <Link>
            Inscreva-se
          </Link>

          <Popover>
            <PopoverTrigger>
              <Button>Onde nos encontrar?</Button>
            </PopoverTrigger>
            <PopoverContent w={200} h={200}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <VStack direction={'column'} align='start'>
                  <Button colorScheme='facebook' leftIcon={<FaInstagram />} >
                    Instagram
                  </Button>
                  <Button colorScheme='facebook' leftIcon={<FaDiscord />} >
                    Discord
                  </Button>
                  <Button colorScheme='facebook' leftIcon={<FaFacebook />} >
                    Facebook
                  </Button>

                  <Button colorScheme='facebook' leftIcon={<FaLinkedin />}>
                    Linkedin
                  </Button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>

        <Box>
          <Button marginRight={2}>Login</Button>
          <Button>Criar uma conta</Button>
        </Box>

      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
