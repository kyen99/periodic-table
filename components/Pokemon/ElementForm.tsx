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
  plength: '',
  pweight: '',
  row: '',
  column: '',
  name: '',
  stage: '',
  ptype: '',
  species: '',
}

const ElementForm = ({ form, setForm, setData, ...rest }) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setData((data) => ({
      ...data,
      elements: { ...data.elements, [form.name]: { ...form } },
    }))
    setForm(formDefault)
  }
  return (
    <Box {...rest}>
      <form onSubmit={handleSubmit}>
        <Heading fontSize={24}>Add Pokemon</Heading>
        <GridItem colSpan={2} my={2}>
          <Text>Pokemon Name</Text>
          <Input
            name="name"
            bgColor="gray.100"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </GridItem>
        <Grid templateColumns="1fr 1fr" gridGap={6}>
          <Box>
            <Text>Length</Text>
            <Input
              name="length"
              w={16}
              value={form.plength}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, plength: e.target.value })}
            />
          </Box>
          <Box>
            <Text>Weight</Text>
            <Input
              name="weight"
              w={16}
              value={form.pweight}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, pweight: e.target.value })}
            />
          </Box>
          <GridItem colSpan={2}>
            <Text>Pokemon Species</Text>
            <Input
              name="species"
              bgColor="gray.100"
              value={form.species}
              onChange={(e) => setForm({ ...form, species: e.target.value })}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Text>Pokemon Stage</Text>
            <Select
              name="stage"
              value={form.stage}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, stage: e.target.value })}
            >
              <option value=""></option>
              <option value="basic">Basic</option>
              <option value="stage1">Stage 1</option>
              <option value="stage2">Stage 2</option>
              <option value="ex">Ex</option>
              <option value="mega">Mega</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <Text>Pokemon Type</Text>
            <Select
              name="ptype"
              value={form.ptype}
              bgColor="gray.100"
              onChange={(e) => setForm({ ...form, ptype: e.target.value })}
            >
              <option value=""></option>
              <option value="lightbrown">Normal</option>
              <option value="orange.300">Fighting</option>
              <option value="brown.200">Flying</option>
              <option value="green.800">Poison</option>
              <option value="brown.800">Ground</option>
              <option value="gray.700">Rock</option>
              <option value="brown.200">Bug</option>
              <option value="gray.100">Ghost</option>
              <option value="gray.400">Steel</option>
              <option value="red.400">Fire</option>
              <option value="blue.400">Water</option>
              <option value="green.600">Grass</option>
              <option value="yellow.400">Electric</option>
              <option value="purple.500">Psychic</option>
              <option value="blue.200">Ice</option>
              <option value="green.500">Dragon</option>
              <option value="gray.900">Dark</option>
              <option value="pink.200">Fairy</option>
            </Select>
          </GridItem>
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
