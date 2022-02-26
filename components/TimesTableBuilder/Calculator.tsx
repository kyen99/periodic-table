import * as React from 'react'
import { Flex, Input } from '@chakra-ui/react'

const Calc = () => {
  const [answer, setAnswer] = React.useState(0)
  const [values, setValues] = React.useState(['', ''])

  React.useEffect(() => {
    setAnswer(parseInt(values[0]) * parseInt(values[1]))
  }, [values])

  return (
    <Flex className="no-print">
      <Input
        w={16}
        value={values[0]}
        onChange={(e) => {
          setValues([e.target.value, values[1]])
        }}
      />
      &nbsp;&nbsp;X&nbsp;&nbsp;
      <Input
        w={16}
        value={values[1]}
        onChange={(e) => {
          setValues([values[0], e.target.value])
        }}
      />
      &nbsp;&nbsp;=&nbsp;&nbsp;
      {answer}
    </Flex>
  )
}

export default Calc
