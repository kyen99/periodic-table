import { chakra, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Element = ({
  element,
  zoom = true,
  ...rest
}: {
  element: iElement
  zoom?: boolean
}) => {
  const { row, column, number, color } = element
  return (
    <Flex
      as={motion.div}
      key={`${row}-${column}`}
      direction="column"
      justify="space-around"
      bgColor={color}
      align="center"
      py={2}
      w="50px"
      h="50px"
      border="1px solid #000"
      gridColumnStart={parseInt(column)}
      order={parseInt(column)}
      position="relative"
      whileHover={zoom ? { scale: 1.5, zIndex: 1 } : {}}
      {...rest}
    >
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize={18}>{number}</Text>
      </Flex>
    </Flex>
  )
}

export default chakra(Element)
