import { Box, Flex, Text, ButtonGroup, useColorMode, Switch, Stack, Icon } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import { ButtonComponent } from '../components/Button'
import { TextComponent } from '../components/Text'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPercent } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go'
import ReactGA from 'react-ga';
import { useEffect } from 'react'

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();


  useEffect(() => {
    ReactGA.initialize('G-TJL9CLR9VR');

    ReactGA.pageview('/')
  }, []);

  
  const handleOpenSubscriptionForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfyAzW3QPZTm2VTnR-CES03SBV-K5c8GnCwcVX2Wcpgz9Xhag/viewform");
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <Box>

      <Stack direction='row'>
        <Switch colorScheme='teal' size='lg' onChange={toggleColorMode} />
      </Stack>
      <Box paddingLeft={8} paddingRight={8}>

        <Box marginTop={32}>

          <Link href={'/register'}>Register</Link>
          <TextComponent text='Semente da liberdade, grupo que luta contra o estado' fontSize='5xl' />
          <TextComponent text='Somos um grupo de estudantes que luta a favor de liberdade para as pessoas' fontSize='xl' marginTop={2} />
          <TextComponent text='Com sede no estado de SP na cidade de São Carlos' />
          <ButtonComponent value='Saiba mais' marginTop={16} />
        </Box>

        <Flex w={'100%'} marginTop={36} justifyContent='space-between' alignItems={'center'}>
          <Box >
            <TextComponent color='primary' text='Quem somos?' />
            <TextComponent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' fontSize='3xl' />
            <TextComponent text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' fontSize='3xl' />
            <TextComponent
              marginTop={6}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
          </Box>

          <Image
            marginRight={32}
            boxSize={150}
            src='https://camo.githubusercontent.com/5c9a8022c5b6a9c7204ca285ea50af4c47b62b64ea601b25f01367ca9227369b/68747470733a2f2f7777772e73656d656e746564616c69626572646164652e636f6d2e62722f696d616765732f53444c2d30352e706e67'
            alt='Semente logo'
          />
        </Flex>

        <Flex marginTop={32} marginBottom={32} alignItems='center' justifyItems={'center'} flexDirection={'column'}>
          <TextComponent text="Oque fazemos?" fontSize='5xl' borderBottomColor='green' borderBottomWidth={5} />
          <TextComponent text="Lorem ipsum is placeholder text commonly used in the graphic,<br /> print, and publishing industries for previewing layouts and visual mockups." fontSize='3xl' />

        </Flex>

        <Flex marginTop={32} justifyContent='center' flexDirection={'column'} alignItems='center'>
          <TextComponent text='RESULTADOS DE IMPACTO' fontWeight='bold' fontSize='xl' />

          <Flex w={'100%'} flexDir='row' paddingTop={16} justifyContent='space-evenly'>
            <Flex flexDir={'row'} alignItems='center'>
              <TextComponent text='200' fontWeight='bold' fontSize='6xl' />
              <Icon as={GoPlus} w={10} h={10} color='#FFCB14' />
              <TextComponent text=' faculdades atentidas' fontSize='3xl' />
            </Flex>

            <Flex flexDir={'row'} alignItems='center'>
              <TextComponent text='100' fontWeight='bold' fontSize='6xl' />
              <Icon as={BsPercent} w={10} h={10} color='#FFCB14' />
              <TextComponent text='aproveitamento' fontSize='3xl' />
            </Flex>

            <Flex flexDir={'row'} alignItems='center'>
              <TextComponent text='100' fontWeight='bold' fontSize='6xl' />
              <Icon as={GoPlus} w={10} h={10} color='#FFCB14' />
              <TextComponent text='membros' fontSize='3xl' />
            </Flex>

          </Flex>
        </Flex>

        <Flex
          padding={150}
          marginTop={32}
          marginBottom={32}
          alignItems='center'
          alignContent={'center'}
          justifyItems={'center'}
          justifyContent='center'
          flexDirection={'column'}
          bg='black'
          marginLeft={-8}
          marginRight={-8}
        >
          <Text fontSize='5xl' align={'center'} borderBottomWidth={5} borderBottomColor={"yellow"} color='white'>
            Faça parte desse time vocẽ também!
          </Text>
          <Text align={'center'} fontSize='2xl' color={'white'}>
            Lorem ipsum is placeholder text commonly used in the graphic,<br /> print, and publishing industries for previewing layouts and visual mockups.
          </Text>

          <ButtonComponent value='Estou interessado!' onClick={() => ReactGA.event({
            category: 'Links',
            action: 'GitHub',
            label: 'GitHub button clicked!',
            value: 1
          })}
            marginTop={16} />
        </Flex>


        <Box paddingBottom={32}>
          <Slider {...settings} arrows={true}>
            <Box width={400} height={400} backgroundColor='blue'>

            </Box>

            <Box width={400} height={400} backgroundColor='red'>

            </Box>

            <Box width={400} height={400} backgroundColor='yellow'>

            </Box>

            <Box width={400} height={400} backgroundColor='brown'>

            </Box>
          </Slider>
        </Box>



      </Box>

      <Box w={'100%'} bg='black' padding={20} alignItems='start'>
        <TextComponent text='Semente da liberdade' color='white' fontSize='3xl' />

        <TextComponent text='fodase o estado' color='white' fontSize='xl' marginTop={8} />
      </Box>
    </Box>
  )
}
