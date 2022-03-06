import { chakra, Box, Button, Flex, Grid, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import Element from './Element'
import Guide from './Guide'
import Editor from './Editor'

const rows = new Array(11).fill(1)

const PeriodicTable = ({ data, setData }) => {
  const { title } = data
  const [showGuide, setShowGuide] = useState(true)
  return (
    <Box h="100vh" w="100%">
      <Flex justify="space-between">
        <Heading fontSize={36} minH={54} m={4}>
          {title}
        </Heading>
      </Flex>
      <Flex justifyContent="space-between" mt={8}>
        <Box position="relative" minH={550} mt={50} w={950}>
          <Box ml={50}>
            {rows.map((_, idx) => {
              const { elements } = data
              return (
                <Grid key={idx} templateColumns="repeat(18, 1fr)" height={50}>
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
          <Flex my={5} justifyContent="flex-end">
            <Button
              className="no-print"
              onClick={() => setShowGuide(!showGuide)}
            >
              Toggle Grid
            </Button>
          </Flex>
          <Editor data={data} setData={setData} />
        </Box>
        {/* <VideoBox /> */}
      </Flex>
    </Box>
  )
}

export default chakra(PeriodicTable)
