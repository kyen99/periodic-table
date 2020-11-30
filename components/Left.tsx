import {
  chakra,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Select,
  Stack,
} from '@chakra-ui/react'
import { SyntheticEvent, useState } from 'react'

const formDefault = {
  symbol: '',
  number: '',
  row: '',
  column: '',
  name: '',
  color: '',
}

const Left = ({ data, setData, reset, ...props }) => {
  const [form, setForm] = useState(formDefault)
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setData({
      ...data,
      elements: { ...data.elements, [form.symbol]: { ...form } },
    })
    setForm(formDefault)
  }

  return (
    <Box {...props} overflow='scroll'>
      <Box>
        <Text fontSize={24}>Title</Text>
        <Input
          placeholder='Title'
          value={data.title}
          bgColor='gray.100'
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </Box>
      <br />
      <Box>
        <form onSubmit={handleSubmit}>
          <Text fontSize={24}>Add Element</Text>
          <Grid templateColumns='1fr 1fr' gridGap={6}>
            <Box>
              <Text>Symbol</Text>
              <Input
                name='symbol'
                width={16}
                value={form.symbol}
                bgColor='gray.100'
                onChange={(e) => setForm({ ...form, symbol: e.target.value })}
              />
            </Box>
            <Box>
              <Text>Atomic Number</Text>
              <Input
                name='number'
                width={16}
                value={form.number}
                bgColor='gray.100'
                onChange={(e) => setForm({ ...form, number: e.target.value })}
              />
            </Box>
            <Box>
              <Text>Row</Text>
              <Input
                name='row'
                width={16}
                value={form.row}
                bgColor='gray.100'
                onChange={(e) => setForm({ ...form, row: e.target.value })}
              />
            </Box>
            <Box>
              <Text>Column</Text>
              <Input
                name='column'
                width={16}
                value={form.column}
                bgColor='gray.100'
                onChange={(e) => setForm({ ...form, column: e.target.value })}
              />
            </Box>
            <GridItem colSpan={2}>
              <Text>Element Name</Text>
              <Input
                name='name'
                bgColor='gray.100'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Text>Color</Text>
              <Select
                name='color'
                value={form.color}
                bgColor='gray.100'
                onChange={(e) => setForm({ ...form, color: e.target.value })}
              >
                <option value=''></option>
                <option value='blue.400'>Blue</option>
                <option value='blue.200'>Light Blue</option>
                <option value='green.400'>Green</option>
                <option value='green.200'>Light Green</option>
                <option value='orange.300'>Orange</option>
                <option value='purple.400'>Purple</option>
                <option value='purple.200'>Light Purple</option>
                <option value='red.300'>Red</option>
                <option value='yellow.400'>Yellow</option>
              </Select>
            </GridItem>
            <Box>
              <Button colorScheme='blue' type='submit'>
                Save Element
              </Button>
            </Box>
          </Grid>
        </form>
      </Box>
      <br />
      <Stack>
        <Text fontSize={24}>Elements</Text>
        {Object.keys(data.elements).map((e) => (
          <Flex key={e} justifyContent='space-between'>
            <Box p={1} display='inline-block' bgColor={data.elements[e].color}>
              {e}&nbsp;[{data.elements[e].row}, {data.elements[e].column}]
            </Box>
            <Box>
              <Button
                size='xs'
                variant='outline'
                onClick={() => setForm({ symbol: e, ...data.elements[e] })}
              >
                edit
              </Button>
              &nbsp;
              <Button
                size='xs'
                variant='outline'
                onClick={() => {
                  const elements = data.elements
                  delete elements[e]
                  setData({ ...data, elements })
                }}
              >
                delete
              </Button>
            </Box>
          </Flex>
        ))}
      </Stack>
      <br />
      <hr />
      <br />
      <Button
        colorScheme='red'
        onClick={() => confirm('Are you sure?') && reset()}
      >
        Reset All
      </Button>
    </Box>
  )
}

export default chakra(Left)
