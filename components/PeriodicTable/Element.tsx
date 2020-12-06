import { chakra, Grid, Text, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface iElement {
  symbol: string
  color: string
  column: string
  row: string
  name: string
  number: string
}

const Element = ({ element, ...rest }: { element: iElement }) => {
  const { symbol, color, column, name, number } = element
  const MotionBox = chakra(motion.div)
  return (
    <MotionBox
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      py={2}
      key={symbol}
      width='50px'
      height='50px'
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
    </MotionBox>
  )
}

export default Element
