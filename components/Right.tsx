import { chakra, Box, Button, Grid, Text } from '@chakra-ui/react'
import { useState } from 'react'

const Right = ({ data, ...props }) => {
  const [showGrid, setShowGrid] = useState(true)
  const { title } = data
  const rows = new Array(10).fill(1)
  const cols = new Array(18).fill(1)
  return (
    <Box {...props} height='100vh' width='100%'>
      <Text fontSize={36} minH={54}>
        {title}
      </Text>
      <br />
      <Box position='relative' minH={550} mt={50} w={950}>
        <Box ml={50}>
          {rows.map((r, idx) => {
            const { elements } = data
            return (
              <Grid key={idx} templateColumns='repeat(18, 1fr)' height={50}>
                {Object.keys(elements)
                  .filter((e) => elements[e].row === (idx + 1).toString())
                  .map((e) => (
                    <Grid
                      key={e}
                      width='50px'
                      height='50px'
                      placeItems='center'
                      border='1px solid #000'
                      bgColor={elements[e].color}
                      gridColumnStart={parseInt(elements[e].column)}
                      position='relative'
                    >
                      <Text fontSize={19} fontWeight={600}>
                        {e}
                      </Text>
                      <Text
                        letterSpacing={-1}
                        textTransform='uppercase'
                        fontSize={6}
                      >
                        {elements[e].name}
                      </Text>
                      <Box position='absolute' right={1} top={0}>
                        <Text fontSize={10}>{elements[e].number}</Text>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            )
          })}
        </Box>
        <Box
          position='absolute'
          top={-50}
          display={showGrid ? 'block' : 'none'}
        >
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
          position='absolute'
          bottom={0}
          right={0}
          onClick={() => setShowGrid(!showGrid)}
        >
          Toggle Grid
        </Button>
      </Box>
    </Box>
  )
}

export default chakra(Right)
