import {
  createMultiStyleConfigHelpers,
  defineStyleConfig,
  extendTheme
} from '@chakra-ui/react'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'

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

const questionTileHelpers = createMultiStyleConfigHelpers([
  'tile',
  'image',
  'titleText',
  'subTitleText'
])

const QuestionTile = questionTileHelpers.defineMultiStyleConfig({
  baseStyle: {
    tile: {
      position: 'relative',
      boxSize: '120px',
      borderRadius: "xl",
      color: '#FFF',
      backgroundColor: '#333',
      _hover: {
        color: "#BBB",
      },
    },
    image: {
      borderRadius: 'inherit',
      objectFit: 'cover',
      opacity: '0.9',
      width: '100%',
      height: '100%',
    },
    titleText: {
      position: 'absolute',
      fontFamily: 'var(--chakra-fonts-inter)',
      fontWeight: '700',
      textShadow: '1px 1px 2px black, 1px 1px 1px black',
    },
    subTitleText: {
      position: 'absolute',
      fontFamily: 'var(--chakra-fonts-raleway)',
      fontWeight: '500',
    }
  },
  sizes: {
    sm: {
      tile: {
        textAlign: 'center',
      },
      titleText: {
        bottom: 2,
        fontSize: 'sm',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      subTitleText: {
        display: 'none',
      },
    },
    md: {
      tile: {
        height: '120px',
        width: '320px',
        textAlign: 'left',
        _after: {
          content: '""',
          position: 'absolute',
          top: '0px',
          left: '0px',
          height: '100%',
          width: '100%',
          borderRadius: 'inherit',
          opacity: '0.4',
          backgroundImage: '\
            linear-gradient(\
              to top,\
              hsl(0, 0%, 0%) 0%,\
              hsla(0, 0%, 0%, 0.987) 8.2%,\
              hsla(0, 0%, 0%, 0.951) 16.4%,\
              hsla(0, 0%, 0%, 0.896) 24.5%,\
              hsla(0, 0%, 0%, 0.825) 32.5%,\
              hsla(0, 0%, 0%, 0.741) 40.4%,\
              hsla(0, 0%, 0%, 0.648) 48%,\
              hsla(0, 0%, 0%, 0.55) 55.4%,\
              hsla(0, 0%, 0%, 0.45) 62.5%,\
              hsla(0, 0%, 0%, 0.352) 69.3%,\
              hsla(0, 0%, 0%, 0.259) 75.6%,\
              hsla(0, 0%, 0%, 0.175) 81.6%,\
              hsla(0, 0%, 0%, 0.104) 87%,\
              hsla(0, 0%, 0%, 0.049) 91.9%,\
              hsla(0, 0%, 0%, 0.013) 96.3%,\
              hsla(0, 0%, 0%, 0) 100%\
            )'
        }
      },
      titleText: {
        top: 2,
        left: 3,
        zIndex: 1,
        fontSize: 'lg',
      },
      subTitleText: {
        top: 10,
        left: 3,
        zIndex: 1,
        fontSize: 'md',
        textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  defaultProps: {
    size: 'sm',
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
    QuestionTile,
  },
  fonts: {
    poppins: `'Poppins', sans-serif`,
    raleway: `'Raleway', sans-serif`,
    inter: `'Inter', sans-serif`,
  },
})
export default theme