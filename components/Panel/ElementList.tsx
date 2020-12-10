import { useState } from 'react'
import { Box, Button, Flex, Heading, Input, Stack } from '@chakra-ui/react'

const ElementList = ({ elements, setForm, setData, scrollArea, ...rest }) => {
  const [search, setSearch] = useState('')
  return (
    <Stack mb={10} {...rest}>
      <Heading fontSize={24}>Elements</Heading>
      <Input
        placeholder='symbol'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        bgColor='white'
      />
      {Object.keys(elements)
        .filter((e) => e.toLowerCase().match(search.toLowerCase()))
        .map((e) => (
          <Flex key={e} justifyContent='space-between'>
            <Box p={1} display='inline-block' bgColor={elements[e].color}>
              {e}&nbsp;[{elements[e].row}, {elements[e].column}] -{' '}
              {elements[e].mass}
            </Box>
            <Box>
              <Button
                size='xs'
                variant='outline'
                onClick={() => {
                  setForm({ symbol: e, ...elements[e] })
                  scrollArea.current.scrollTo(0, 0)
                }}
              >
                edit
              </Button>
              &nbsp;
              <Button
                size='xs'
                variant='outline'
                onClick={() => {
                  delete elements[e]
                  setData((data) => ({ ...data, elements }))
                }}
              >
                delete
              </Button>
            </Box>
          </Flex>
        ))}
    </Stack>
  )
}

export default ElementList
