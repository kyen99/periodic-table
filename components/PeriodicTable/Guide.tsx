import { useState } from 'react'
import { Box, Button, Grid, Text } from '@chakra-ui/react'

const cols = new Array(18).fill(1)
const rows = new Array(10).fill(1)

const Guide = () => {
  const [showGrid, setShowGrid] = useState(true)
  return (
    <Box className='no-print' position='absolute' top={-50} zIndex={-1}>
      <Box visibility={showGrid ? 'visible' : 'hidden'}>
        <Grid templateColumns='repeat(19, 1fr)'>
          <Grid height={50} width={50} placeItems='center' />
          {cols.map((_, ci) => (
            <Grid key={ci} height={50} width={50} placeItems='center'>
              <Text color='#ccc'>{ci + 1}</Text>
            </Grid>
          ))}
        </Grid>
        {rows.map((_, ri) => (
          <Grid key={ri} templateColumns='repeat(19, 1fr)'>
            <Grid height={50} width={50} placeItems='center'>
              <Text color='#ccc'>{ri + 1}</Text>
            </Grid>
            {cols.map((_, ci) => (
              <Box key={ci} border='1px dotted #ccc' height={50} width={50} />
            ))}
          </Grid>
        ))}
      </Box>
      <Button
        className='no-print'
        position='absolute'
        bottom={-20}
        right={0}
        onClick={() => setShowGrid(!showGrid)}
      >
        Toggle Grid
      </Button>
    </Box>
  )
}

export default Guide
