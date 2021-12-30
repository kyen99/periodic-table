import Monaco from '@monaco-editor/react'
import { Button, Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'

const Editor = ({ data, setData, ...rest }) => {
  const editorRef = useRef(null)
  const [isValid, setIsValid] = useState(true)

  const handleSave = () => {
    setData(JSON.parse(editorRef.current.getValue()))
  }

  const handleOnChange = (value: string, _event) => {
    try {
      JSON.parse(value)
      setIsValid(true)
    } catch (e) {
      setIsValid(false)
    }
  }

  function handleOnMount(editor) {
    editorRef.current = editor
  }

  return (
    <Flex direction="column" {...rest}>
      <Monaco
        height="80vh"
        language="json"
        value={JSON.stringify(data, null, 2)}
        onMount={handleOnMount}
        onChange={handleOnChange}
        options={{ minimap: { enabled: false } }}
      />
      <Button disabled={!isValid} onClick={handleSave}>
        {isValid ? 'Save' : 'There is an error'}
      </Button>
    </Flex>
  )
}

export default Editor
