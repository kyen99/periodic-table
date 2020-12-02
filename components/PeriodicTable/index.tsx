import { chakra, Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { useState } from 'react'
import VideoBox from './VideoBox'
import Element from './Element'
import Guide from './Guide'
import ElementWords from './ElementWords'

const rows = new Array(10).fill(1)

const Right = ({ data, ...props }) => {
  const { title } = data
  const [showGuide, setShowGuide] = useState(true)
  return (
    <Box {...props} height='100vh' width='100%'>
      <Text fontSize={36} minH={54}>
        {title}
      </Text>
      <Flex justifyContent='space-between' mt={8}>
        <Box position='relative' minH={550} mt={50} w={950}>
          <Box ml={50}>
            {rows.map((_, idx) => {
              const { elements } = data
              return (
                <Grid key={idx} templateColumns='repeat(18, 1fr)' height={50}>
                  {Object.keys(elements)
                    .filter((e) => elements[e].row === (idx + 1).toString())
                    .map((e) => (
                      <Element
                        key={e}
                        element={{ symbol: e, ...elements[e] }}
                      />
                    ))}
                </Grid>
              )
            })}
          </Box>
          {showGuide && <Guide />}
          <Flex my={5} justifyContent='flex-end'>
            <Button
              className='no-print'
              onClick={() => setShowGuide(!showGuide)}
            >
              Toggle Grid
            </Button>
          </Flex>
          <ElementWords />
        </Box>
        <VideoBox />
      </Flex>
    </Box>
  )
}

export default chakra(Right)
