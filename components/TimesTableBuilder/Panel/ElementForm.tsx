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
  number: '',
  row: '',
  column: '',
  color: '',
}

export const colorOptions = [
  { name: 'red', value: 'red.500' },
  { name: 'orange', value: 'orange.300' },
  { name: 'yellow', value: 'yellow.200' },
  { name: 'dark green', value: 'green.600' },
  { name: 'green', value: 'green.500' },
  { name: 'light green', value: 'green.300' },
  { name: 'blue', value: 'blue.400' },
  { name: 'light blue', value: 'cyan.200' },
  { name: 'purple', value: '#8b008b' },
  { name: 'light purple', value: '#9400d3' },
]

const ElementForm = ({ form, setForm, setData, ...rest }) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setData((data) => ({
      ...data,
      elements: {
        ...data.elements,
        [`${form.row}-${form.column}`]: { ...form },
      },
    }))
    setForm(formDefault)
  }
  return (
    <Box {...rest}>
      <form onSubmit={handleSubmit}>
        <Heading fontSize={24}>Add Number</Heading>
        <Grid templateColumns="1fr 1fr" gridGap={6}>
          <Box>
            <Text>Row</Text>
            <Input
              name="row"
              w={16}
              value={form.row}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, row: e.target.value })}
            />
          </Box>
          <Box>
            <Text>Column</Text>
            <Input
              name="column"
              w={16}
              value={form.column}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, column: e.target.value })}
            />
          </Box>
          <GridItem colSpan={2}>
            <Text>Number</Text>
            <Input
              name="name"
              bgColor="gray.100"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Text>Color</Text>
            <Select
              name="color"
              value={form.color}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, color: e.target.value })}
            >
              <option value=""></option>
              {colorOptions.map((c) => (
                <option key={c.name} value={c.value}>
                  {c.name}
                </option>
              ))}
            </Select>
          </GridItem>

          <Button colorScheme="blue" type="submit">
            Save
          </Button>
          <Button onClick={() => setForm(formDefault)}>Clear</Button>
        </Grid>
      </form>
    </Box>
  )
}

export default chakra(ElementForm)
