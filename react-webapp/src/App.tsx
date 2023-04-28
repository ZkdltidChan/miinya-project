import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react"
import { NavBar } from "./components/NavBar/NavBar";
import customTheme from "./theme"
import { Home } from "./pages/Home/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login/Login";
import TodoNew from "./pages/Todo/New";
import TodoList from "./pages/Todo/TodoList";

export const App = () => {
  return (
    < ChakraProvider theme={customTheme} >
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <NavBar/>
          <Box pt={{ base: 1, md: "80px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/todo/new" element={<TodoNew />} />
              <Route path="/todo" element={<TodoList />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </ChakraProvider >
  )
}

