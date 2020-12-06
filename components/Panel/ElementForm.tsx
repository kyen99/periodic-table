import { SyntheticEvent } from 'react'
import {
  chakra,
  Box,
  Button,
  Input,
  Grid,
  GridItem,
  Heading,
  Select,
  Text,
} from '@chakra-ui/react'

export const formDefault = {
  symbol: '',
  number: '',
  row: '',
  column: '',
  name: '',
  color: '',
}

const ElementForm = ({ form, setForm, setData, ...rest }) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setData((data) => ({
      ...data,
      elements: { ...data.elements, [form.symbol]: { ...form } },
    }))
    setForm(formDefault)
  }
  return (
    <Box {...rest}>
      <form onSubmit={handleSubmit}>
        <Heading fontSize={24}>Add Element</Heading>
        <Grid templateColumns='1fr 1fr' gridGap={6}>
          <Box>
            <Text>Symbol</Text>
            <Input
              name='symbol'
              w={16}
              value={form.symbol}
              bgColor='gray.100'
              onChange={(e) => setForm({ ...form, symbol: e.target.value })}
            />
          </Box>
          <Box>
            <Text>Atomic Number</Text>
            <Input
              name='number'
              w={16}
              value={form.number}
              bgColor='gray.100'
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />
          </Box>
          <Box>
            <Text>Row</Text>
            <Input
              name='row'
              w={16}
              value={form.row}
              bgColor='gray.100'
              onChange={(e) => setForm({ ...form, row: e.target.value })}
            />
          </Box>
          <Box>
            <Text>Column</Text>
            <Input
              name='column'
              w={16}
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
              <option value='cyan.200'>Light Blue</option>
              <option value='green.400'>Green</option>
              <option value='green.200'>Light Green</option>
              <option value='orange.300'>Orange</option>
              <option value='#8b008b'>Purple</option>
              <option value='#9400d3'>Light Purple</option>
              <option value='red.300'>Red</option>
              <option value='yellow.200'>Yellow</option>
            </Select>
          </GridItem>

          <Button colorScheme='blue' type='submit'>
            Save
          </Button>
          <Button onClick={() => setForm(formDefault)}>Clear</Button>
        </Grid>
      </form>
    </Box>
  )
}

export default chakra(ElementForm)
