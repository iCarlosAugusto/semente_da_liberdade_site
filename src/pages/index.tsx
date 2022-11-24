import { Box, Button, Flex, Text, ButtonGroup, useColorMode } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import { TextComponent } from '../components/Text'

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Box paddingLeft={8} paddingRight={8}>
        <Box marginTop={32}>

          <Link href={'/register'}>Register</Link>
          <Text fontSize='5xl'>Semente da liberdade, grupo que luta contra o estado</Text>
          <Text fontSize='xl' marginTop={2}>Somos um grupo de estudantes que luta a favor de liberdade para as pessoas</Text>
          <Text>Com sede no estado de SP na cidade de São Carlos</Text>

          <Button marginTop={16}>
            Saiba mais
          </Button>
        </Box>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>



        <Flex w={'100%'} marginTop={36} justifyContent='space-between' alignItems={'center'}>

          <Box >
            <Text>
              Quem somos?
            </Text>

            <Text as='b' fontSize='3xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>

            <Text marginTop={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </Box>

          <Image
            marginRight={32}
            boxSize={150}
            src='https://camo.githubusercontent.com/5c9a8022c5b6a9c7204ca285ea50af4c47b62b64ea601b25f01367ca9227369b/68747470733a2f2f7777772e73656d656e746564616c69626572646164652e636f6d2e62722f696d616765732f53444c2d30352e706e67'
            alt='Semente logo'
          />
        </Flex>


        <Flex marginTop={32} alignItems='center' alignContent={'center'} justifyItems={'center'} justifyContent='center' flexDirection={'column'}>
          <Text fontSize='5xl' align={'center'}>
            Oque fazemos?
          </Text>
          <Text align={'center'} fontSize='3xl'>
            Lorem ipsum is placeholder text commonly used in the graphic,<br /> print, and publishing industries for previewing layouts and visual mockups.
          </Text>

          <ButtonGroup alignContent={'center'} alignSelf={'center'} marginTop={16}>
            <Button>
              Quero ajudar!
            </Button>
            <Button> Quero doar para o projeto</Button>
          </ButtonGroup>
        </Flex>

        <Flex marginTop={32} marginBottom={32} alignItems='center' alignContent={'center'} justifyItems={'center'} justifyContent='center' flexDirection={'column'}>
          <Text fontSize='5xl' align={'center'}>
            Faça parte desse time vocẽ também!
          </Text>
          <Text align={'center'} fontSize='3xl'>
            Lorem ipsum is placeholder text commonly used in the graphic,<br /> print, and publishing industries for previewing layouts and visual mockups.
          </Text>


          <Button marginTop={16}>
            Estou interessado!
          </Button>
        </Flex>
      </Box>

      <Box w={'100%'} bg='black' padding={20} alignItems='start'>
        <TextComponent text='Semente da liberdade' color='white' fontSize='3xl' />

        <TextComponent text='fodase o estado' color='white' fontSize='xl' marginTop={8} />
      </Box>
    </div>
  )
}
