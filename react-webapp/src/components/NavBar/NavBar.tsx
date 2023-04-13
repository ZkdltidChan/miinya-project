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

export const NavBar = ({ }: NavBarProps) => {
  return (
    <>
      TODO
    </>
  )
}

