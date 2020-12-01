import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'

const ElementList = ({ elements, setForm, setData }) => {
  return (
    <Stack mb={10}>
      <Text fontSize={24}>Elements</Text>
      {Object.keys(elements).map((e) => (
        <Flex key={e} justifyContent='space-between'>
          <Box p={1} display='inline-block' bgColor={elements[e].color}>
            {e}&nbsp;[{elements[e].row}, {elements[e].column}]
          </Box>
          <Box>
            <Button
              size='xs'
              variant='outline'
              onClick={() => setForm({ symbol: e, ...elements[e] })}
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
