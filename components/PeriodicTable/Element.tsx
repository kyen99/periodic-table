import { Grid, Text, Box } from '@chakra-ui/react'

interface iElement {
  symbol: string
  color: string
  column: string
  row: string
  name: string
  number: string
}

const Element = ({ element }: { element: iElement }) => {
  const { symbol, color, column, name, number } = element
  return (
    <Grid
      key={symbol}
      width='50px'
      height='50px'
      placeItems='center'
      border='1px solid #000'
      bgColor={color || 'white'}
      gridColumnStart={parseInt(column)}
      order={parseInt(column)}
      position='relative'
      _hover={{ transform: 'scale(1.3)', zIndex: '1' }}
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
    </Grid>
  )
}

export default Element
