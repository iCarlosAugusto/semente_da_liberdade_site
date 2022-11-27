import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  primary: '#1bffbf',
  danger: '#E53E3E',
  white: '#ffffff',
}

const theme = extendTheme({ config, colors })

export default theme