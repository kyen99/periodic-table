import { chakra, Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Element = ({
  element,
  zoom = true,
  ...rest
}: {
  element: iPokemon
  zoom?: boolean
}) => {
  const { plength, ptype, column, species, name, stage, pweight } = element
  return (
    <Flex
      as={motion.div}
      key={ptype}
      direction="column"
      justify="space-around"
      align="center"
      py={2}
      w="50px"
      h="50px"
      border="1px solid #000"
      bgColor={ptype || 'white'}
      gridColumnStart={parseInt(column)}
      order={parseInt(column)}
      position="relative"
      whileHover={zoom ? { scale: 1.5, zIndex: 1 } : {}}
      {...rest}
    >
      <Text letterSpacing={-1} textTransform="uppercase" fontSize={8} pt={2}>
        {name}
      </Text>
      <Text fontSize={6} lineHeight={1} textAlign="center">
        {species}
      </Text>
      <Box position="absolute" left={0} top={0}>
        <Text fontSize={8}>{stage}</Text>
      </Box>
      <Box position="absolute" right={0} top={0}>
        <Text fontSize={6} lineHeight={1}>
          {pweight}
        </Text>
        <Text fontSize={6} lineHeight={1}>
          {plength}
        </Text>
      </Box>
    </Flex>
  )
}

export default chakra(Element)
