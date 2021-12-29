import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const NavLink = ({ href, title }) => (
  <Flex mx="2">
    <NextLink href={href} passHref>
      <Link>{title}</Link>
    </NextLink>
  </Flex>
)

const Navbar = () => {
  return (
    <Flex h={50} flex={1} bgColor="gray.300" align="center" pl="4">
      <NavLink href="/" title="Home" /> |
      <NavLink href="/pokemon" title="Pokemon" /> |
      <NavLink href="/game" title="Periodic Table Game" /> |
      <NavLink href="/timestable" title="Times Table" /> |
      <NavLink href="/bathtime" title="Bath Time" />
    </Flex>
  )
}

export default Navbar
