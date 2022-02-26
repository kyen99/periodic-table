import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const NavLink = ({ href, title, ...rest }) => (
  <Flex mx="2" {...rest}>
    <NextLink href={href} passHref>
      <Link>{title}</Link>
    </NextLink>
  </Flex>
)

const Navbar = ({ selected, ...rest }) => {
  return (
    <Flex
      className="no-print"
      minH={50}
      flex={1}
      bgColor="gray.300"
      align="center"
      pl="4"
      w="100%"
      {...rest}
    >
      <NavLink
        href="/"
        title="Home"
        fontWeight={selected === 'home' ? 800 : 400}
      />{' '}
      |
      <NavLink
        href="/pokemon"
        title="Pokemon"
        fontWeight={selected === 'pokemon' ? 800 : 400}
      />{' '}
      |
      <NavLink
        href="/game"
        title="Periodic Table Game"
        fontWeight={selected === 'game' ? 800 : 400}
      />{' '}
      |
      <NavLink
        href="/timestable"
        title="Times Table"
        fontWeight={selected === 'timestable' ? 800 : 400}
      />{' '}
      |
      <NavLink
        href="/bathtime"
        title="Bath Time"
        fontWeight={selected === 'bathtime' ? 800 : 400}
      />
    </Flex>
  )
}

export default Navbar
