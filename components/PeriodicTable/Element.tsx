import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Element = ({ element, ...rest }: { element: iElement }) => {
  const { symbol, color, column, name, number } = element
  return (
    <Flex
      as={motion.div}
      key={symbol}
      direction='column'
      justify='space-between'
      align='center'
      py={2}
      w='50px'
      h='50px'
      border='1px solid #000'
      bgColor={color || 'white'}
      gridColumnStart={parseInt(column)}
      order={parseInt(column)}
      position='relative'
      whileHover={{ scale: 1.5, zIndex: 1 }}
      {...rest}
    >
      <Text fontSize={19} fontWeight={600}>
        {symbol}
      </Text>
      <Text letterSpacing={-1} textTransform='uppercase' fontSize={6}>
        {name}
      </Text>
      <Box position='absolute' right={1} top={0}>
        <Text fontSize={9}>{number}</Text>
      </Box>
    </Flex>
  )
}

export default Element
