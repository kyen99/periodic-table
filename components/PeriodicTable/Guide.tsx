import { Box, Grid, Text } from '@chakra-ui/react'

const cols = new Array(18).fill(1)
const rows = new Array(11).fill(1)

const Guide = (props) => (
  <Box
    className='no-print'
    position='absolute'
    top={-50}
    zIndex={-1}
    {...props}
  >
    <Grid templateColumns='repeat(19, 1fr)'>
      <Grid h={50} w={50} placeItems='center' />
      {cols.map((_, ci) => (
        <Grid key={ci} h={50} w={50} placeItems='center'>
          <Text color='#ccc'>{ci + 1}</Text>
        </Grid>
      ))}
    </Grid>
    {rows.map((_, ri) => (
      <Grid key={ri} templateColumns='repeat(19, 1fr)'>
        <Grid h={50} w={50} placeItems='center'>
          <Text color='#ccc'>{ri + 1}</Text>
        </Grid>
        {cols.map((_, ci) => (
          <Box key={ci} border='1px dotted #ccc' h={50} w={50} />
        ))}
      </Grid>
    ))}
  </Box>
)

export default Guide
