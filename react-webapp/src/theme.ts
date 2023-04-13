import { extendTheme, keyframes } from "@chakra-ui/react";
// import bgImg from "./assets/bg.jpg";
import bgsvg from "./assets/bg.svg"
import logo from "./assets/logo.png"

const primary = "#FC9F4D"
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
    primary: primary,
    secondary: secondary,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "3px",
      },

      variants: {
        solid: {

        },
        outlineGhost: {
          // borderColor: "none",
          _hover: {
            _before: {
              content: "''",
              position: "absolute",
              border:"1px",
              color: white,
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
              zIndex: "-1",
            },
            borderColor: white,
          }
        },
        gradient: {
          backgroundImage: "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)",
          backgroundSize: "200% auto",
          transition: "0.5s",
          _hover: {
            backgroundImage: "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)",
            backgroundSize: "200% auto",
            backgroundPosition: "right center",
            transform: "scale(1.2)"
          }
        },
        image: {
          _hover: {
            transform: "scale(1.5)"
          }
        }
      }
    },
    Text: {
      variants: {
        "1": {
          color: "whiteColor",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: white,
      },
      variants: {
        "1": {
          color: "whiteColor",
          fontSize: "44px",
          lineHeight: "60px",
        },
        "2": {
          color: "whiteColor",
          fontSize: "32px",
          lineHeight: "60px",
        },
      },
    },
  },
});

export default customTheme;