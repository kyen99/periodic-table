import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

const ElementList = ({ elements, setForm, setData, scrollArea, ...rest }) => {
  const [search, setSearch] = useState('')
  return (
    <Stack mb={10} {...rest}>
      <Heading fontSize={24}>Numbers</Heading>
      <Input
        placeholder="number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        bgColor="white"
      />
      {Object.keys(elements)
        .filter((e) => e.toLowerCase().match(search.toLowerCase()))
        .map((e) => (
          <Flex key={e} justifyContent="space-between">
            <Text px={2} display="inline-block" bgColor={elements[e].color}>
              {elements[e].number}&nbsp;[{elements[e].row}, {elements[e].column}
              ]
            </Text>
            {elements[e].mass && (
              <Text
                display="inline"
                bgColor="blue.400"
                px={2}
                textAlign="center"
              >
                {elements[e].mass}
              </Text>
            )}
            <Box>
              <Button
                size="xs"
                variant="outline"
                onClick={() => {
                  setForm({ symbol: e, ...elements[e] })
                  scrollArea.current.scrollTo(0, 0)
                }}
              >
                edit
              </Button>
              &nbsp;
              <Button
                size="xs"
                variant="outline"
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
