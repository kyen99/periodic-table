import {
  chakra,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import { useState } from 'react'
import Element from './Element'
import Guide from './Guide'
import Editor from './Editor'
import Progress from './ProgressArea'
import Calculator from './Calculator'

const PeriodicTable = ({
  data,
  setData,
  setForm,
  setShowCelebration,
  ...props
}) => {
  const { title } = data
  const rows = new Array(parseInt(data.rows || '0')).fill(1)
  // const cols = new Array(parseInt(data.columns || '0')).fill(1)
  const [showGuide, setShowGuide] = useState(true)
  return (
    <Box w="100%">
      <Flex justify="space-between">
        <Heading fontSize={36} minH={54}>
          {title}
        </Heading>
        <Calculator />
        <Progress
          count={Object.keys(data.elements).length}
          setShowCelebration={setShowCelebration}
          elementCount={0}
        />
      </Flex>
      <Flex
        mt={8}
        onClick={({ pageX, pageY }) => {
          const col = Math.floor((pageX - 300) / 50)
          const row = Math.floor((pageY - 90) / 50)
          setForm({ row: row.toString(), column: col.toString() })
        }}
      >
        <Box position="relative" mt={50}>
          <Box ml={50}>
            {rows.map((_, idx) => {
              const { elements } = data
              return (
                <Grid
                  key={idx}
                  templateColumns={`repeat(${rows.length + 2}, 1fr)`}
                  height={50}
                >
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
          {showGuide && <Guide rows={data.rows} columns={data.columns} />}
        </Box>
      </Flex>
      <Box>
        <Flex my={5} justifyContent="flex-end">
          <Button className="no-print" onClick={() => setShowGuide(!showGuide)}>
            Toggle Grid
          </Button>
        </Flex>
      </Box>
      <Flex>
        <Tabs class="no-print">
          <TabList>
            <Tab>View Code</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Editor data={data} setData={setData} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}

export default chakra(PeriodicTable)