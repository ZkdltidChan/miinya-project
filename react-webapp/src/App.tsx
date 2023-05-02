import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react"
import { NavBar } from "./components/NavBar/NavBar";
import customTheme from "./theme"
import { Home } from "./pages/Home/Home"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Home/Login/Login";
import TodoNew from "./pages/Todo/New";
import TodoList from "./pages/Todo/TodoList";

import TabsList from "./pages/Admin/Tabs/List";
import TabsNew from "./pages/Admin/Tabs/New";
import TabsEdit from "./pages/Admin/Tabs/Edit";

import LevelsList from "./pages/Admin/Levels/List";
import LevelsNew from "./pages/Admin/Levels/New";
import LevelsEdit from "./pages/Admin/Levels/Edit";

import AiCharactersList from "./pages/Admin/AiCharacters/List";
import AiCharactersNew from "./pages/Admin/AiCharacters/New";
import AiCharactersEdit from "./pages/Admin/AiCharacters/Edit";

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
              <Route path="/admin/tabs" element={<TabsList />} />
              <Route path="/admin/tabs/new" element={<TabsNew />} />
              <Route path="/admin/tabs/edit/:id" element={<TabsEdit />} />
              <Route path="/admin/levels" element={<LevelsList />} />
              <Route path="/admin/levels/new" element={<LevelsNew />} />
              <Route path="/admin/levels/edit/:id" element={<LevelsEdit />} />
              <Route path="/admin/ai_characters" element={<AiCharactersList />} />
              <Route path="/admin/ai_characters/new" element={<AiCharactersNew />} />
              <Route path="/admin/ai_characters/edit/:id" element={<AiCharactersEdit />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </ChakraProvider >
  )
}

