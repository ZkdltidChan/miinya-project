import { Link as RouteLink, useNavigate } from "react-router-dom"
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { MdAdd, MdPeople } from "react-icons/md"
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react"

type User = {
  username: string
  jwtToken: string
  refreshToken: string
}

type Router = {
  path: string
  name: string | undefined
  src?: string
  /** @defaultValue 'right' */
  pos?: "left" | "right"
}

type NavBarProps = {
  user?: User
  items: Router[]
  leftItems?: Router[]
}

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    < Box bg="pink.300" w="100%" >
      <HStack p={1} justify="space-between">
        <Heading as={RouteLink} to='' color="white">Logo</Heading>
        <HStack>
          {/* <Link color='white' as={RouteLink} to='/todo'>
            Todo
          </Link> */}
          <IconButton
            variant="ghost"
            icon={<SearchIcon color="white" />}
            aria-label={""}
            _hover={{ bg: 'pink.200' }}
          />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon color="white" />}
              variant='ghost'
              _hover={{ bg: 'pink.200' }}
            />

            <MenuList>
              <MenuItem onClick={() => { navigate('/todo') }} icon={<MdAdd />}>
                Todo
              </MenuItem>
              <MenuItem onClick={() => { navigate('/admin/ai_characters') }} icon={<MdPeople />}>
                Ai Characters Manger
              </MenuItem>
              <MenuItem onClick={() => { navigate('/admin/levels') }} icon={<MdAdd />}>
                Levels Manger
              </MenuItem>
              <MenuItem onClick={() => { navigate('/admin/tabs') }} icon={<MdAdd />}>
                Tabs
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box >
  )
}


