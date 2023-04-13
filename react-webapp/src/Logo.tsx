import * as React from "react"
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react"
// import logo from "./logo.svg"
import logo from "./assets/breeze-removebg-preview.png"
const spin = keyframes`
`

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return <chakra.img animation={animation} src={logo} ref={ref} {...props} />
})
