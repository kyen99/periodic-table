import { chakra, Box, Input, Heading } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import ElementForm, { formDefault } from './ElementForm'
import ElementList from './ElementList'

const Panel = ({ data, setData, reset, ...rest }) => {
  const [form, setForm] = useState(formDefault)
  const scrollArea = useRef()
  return (
    <Box {...rest} overflow="scroll" ref={scrollArea}>
      <Box mb={10}>
        <Heading fontSize={24}>Title</Heading>
        <Input
          placeholder="Title"
          value={data.title}
          bgColor="gray.100"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </Box>
      <Box mb={10}>
        <Heading fontSize={24}>Element count</Heading>
        <Input
          placeholder="Element Count"
          value={data.elementCount}
          bgColor="gray.100"
          onChange={(e) => setData({ ...data, elementCount: e.target.value })}
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
