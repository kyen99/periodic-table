import { chakra, Box, Flex, Input, Heading } from '@chakra-ui/react'
import { useRef } from 'react'
import ElementForm from './ElementForm'
import ElementList from './ElementList'

const Panel = ({ data, setData, reset, form, setForm, submitRef, ...rest }) => {
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
        <Flex>
          <Box>
            <Heading fontSize={24}>Rows</Heading>
            <Input
              placeholder="Row count"
              value={data.rows}
              bgColor="gray.100"
              onChange={(e) => setData({ ...data, rows: e.target.value })}
            />
          </Box>
          <Box>
            <Heading fontSize={24}>Columns</Heading>
            <Input
              placeholder="Column count"
              value={data.columns}
              bgColor="gray.100"
              onChange={(e) => setData({ ...data, columns: e.target.value })}
            />
          </Box>
        </Flex>
      </Box>
      <ElementForm
        form={form}
        setForm={setForm}
        setData={setData}
        submitRef={submitRef}
        mb={10}
      />
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
