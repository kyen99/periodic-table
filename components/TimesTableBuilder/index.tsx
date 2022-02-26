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
import Calculator from './Calculator'
import { colorOptions } from './Panel/ElementForm'

const PeriodicTable = ({ data, setData, setForm, submitRef }) => {
  const { title } = data
  const rows = new Array(parseInt(data.rows || '0')).fill(1)
  const [showGuide, setShowGuide] = useState(true)
  return (
    <Box w="100%">
      <Flex justify="space-between" m={4}>
        <Heading fontSize={36} minH={54}>
          {title}
        </Heading>
        <Calculator />
      </Flex>
      <Flex
        mt={8}
        cursor="pointer"
        onClick={({ pageX, pageY }) => {
          const col = Math.floor((pageX - 300) / 50)
          const row = Math.floor((pageY - 140) / 50)
          const existingItem =
            data.elements[`${row.toString()}-${col.toString()}`]
          const newItem = {
            row: row.toString(),
            column: col.toString(),
            color:
              colorOptions[parseInt((row + col - 2).toString().slice(-1))]
                .value,
            number: row * col,
          }
          if (existingItem) {
            setForm(existingItem)
            return
          }
          setForm(newItem)
          setTimeout(() => submitRef.current.click(), 100)
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
        <Tabs className="no-print">
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
