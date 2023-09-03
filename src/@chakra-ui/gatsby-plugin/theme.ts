import { defineStyleConfig, extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

const NavBar = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: '0.75rem',
    bg: '#FFF',
    height: '40px',
    position: 'sticky',
    top: '0px',
    zIndex: '10',
    boxShadow: '0px 0px 8px 2px #888',
  },
})

const theme = extendTheme({
  colors: {
    rush: {
      50:  "#F2F1E3",
      100: "#E5E3C7",
      200: "#D8D5AB",
      300: "#CCC88F",
      400: "#BFBA73",
      500: "#B2AC57",
      600: "#9A9447",
      700: "#7E793A",
      800: "#625E2D",
      900: "#464320",
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'var(--chakra-fonts-poppins)',
        fontWeight: '500',
        _hover: {
          color: 'rush.500'
        },
      },
      variants: {
        nav: {
        },
        navHero: {
          color: 'orange.500',
          fontWeight: '700',
        }
      },
    },
    Text: {
      variants: {
        wordmark: {
          fontFamily: 'var(--chakra-fonts-poppins)',
          fontWeight: '400',
          fontSize: '1.2rem',
        }
      }
    },
    Link: {
      baseStyle: {
        //color: 'teal.500'
      }
    },
    NavBar,
  },
  fonts: {
    poppins: `'Poppins', sans-serif`,
  },
})
export default theme