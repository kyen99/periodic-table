import { chakra, Box, Button, Input, Text } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import ElementForm, { formDefault } from './ElementForm'
import ElementList from './ElementList'

const Panel = ({ data, setData, reset, ...props }) => {
  const [form, setForm] = useState(formDefault)
  const scrollArea = useRef()
  return (
    <Box {...props} overflow='scroll' ref={scrollArea}>
      <Box mb={10}>
        <Text fontSize={24}>Title</Text>
        <Input
          placeholder='Title'
          value={data.title}
          bgColor='gray.100'
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </Box>
      <ElementForm form={form} setForm={setForm} setData={setData} mb={10} />
      <ElementList
        elements={data.elements}
        setForm={setForm}
        setData={setData}
        scrollArea={scrollArea}
      />
    </Box>
  )
}

export default chakra(Panel)
