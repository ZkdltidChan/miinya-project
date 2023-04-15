import { extendTheme, keyframes } from "@chakra-ui/react";
// import bgImg from "./assets/bg.jpg";
import bgsvg from "./assets/bg.svg"
import logo from "./assets/logo.png"

const primary = "##f58cec"
const secondary = "#34568b"
const white = "#cfd9df"

const myAnimat = `${keyframes`
0% {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
50%{
}
100%{
}
`} infinite 1s`

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        // backgroundImage: bgsvg,
        backgroundPosition: "top",
        // backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      },
      h2: {
        color: "red.300",
      }
    }
  },
  colors: {
    primary: {
      100: primary,
    },
    secondary: secondary,
  },
  components: {
    Box: {
      baseStyle: {
        w:"100px",
        bg:"red.300"
      },
      defaultProps: {},
    },
    Button: {
      baseStyle: {
        borderRadius: "3px",
      },
      variants: {
        solid: {},
        gradient: {},
      }
    },
    Heading: {
      baseStyle: {
        color: white,
      },
      variants: {},
    },
  },
});

export default customTheme;