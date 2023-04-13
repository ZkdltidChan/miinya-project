import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"
import customTheme from "./theme"
import { Home } from "./pages/Home/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    < ChakraProvider theme={customTheme} >
      <Box textAlign="center" fontSize="xl">
        <Grid>
              <BrowserRouter>
                <Box pt={{ base: 1, md: "80px" }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Box>
              </BrowserRouter>
        </Grid>
      </Box>
    </ChakraProvider >
  )
}

