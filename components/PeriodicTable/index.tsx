import { chakra, Box, Flex, Grid, Text } from '@chakra-ui/react'
import VideoBox from './VideoBox'
import Element from './Element'
import Guide from './Guide'
import ElementWords from './ElementWords'

const rows = new Array(10).fill(1)

const Right = ({ data, ...props }) => {
  const { title } = data
  return (
    <Box {...props} height='100vh' width='100%'>
      <Text fontSize={36} minH={54}>
        {title}
      </Text>
      <br />
      <Flex justifyContent='space-between'>
        <Box position='relative' minH={550} mt={50} w={950}>
          <Box ml={50}>
            {rows.map((_, idx) => {
              const { elements } = data
              return (
                <Grid key={idx} templateColumns='repeat(18, 1fr)' height={50}>
                  {Object.keys(elements)
                    .filter((e) => elements[e].row === (idx + 1).toString())
                    .map((e) => (
                      <Element element={{ symbol: e, ...elements[e] }} />
                    ))}
                </Grid>
              )
            })}
          </Box>
          <Guide />
        </Box>
        <VideoBox />
      </Flex>
      <ElementWords />
    </Box>
  )
}

export default chakra(Right)
