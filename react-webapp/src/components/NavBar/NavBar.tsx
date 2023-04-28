import { Link as RouteLink } from "react-router-dom"
import { AddIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
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

export const NavBar = () => (
  <Box bg="pink.300" w="100%">
    <HStack p={1} justify="space-between">
      <Heading as={RouteLink} to='' color="white">Logo</Heading>
      <HStack>
        <Link color='white' as={RouteLink} to='/todo'>
          Todo
        </Link>
        <IconButton variant="ghost" icon={<SearchIcon color="white" />} aria-label={""} />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon color="white" />}
            variant='ghost'
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command='⌘T'>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  </Box>
)

