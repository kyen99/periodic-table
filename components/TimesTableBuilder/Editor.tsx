import Monaco from '@monaco-editor/react'
import { Button, Flex } from '@chakra-ui/react'
import { useRef, useEffect, useState } from 'react'

const Editor = ({ data, setData, ...rest }) => {
  const editorRef = useRef(null)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      checkCode()
    }, 1000)
    return () => clearInterval(id)
  }, [editorRef])

  const checkCode = () => {
    if (editorRef) {
      try {
        JSON.parse(editorRef.current.getValue())
        setIsValid(true)
      } catch (e) {
        setIsValid(false)
      }
    }
  }

  const handleSave = () => {
    setData(JSON.parse(editorRef.current.getValue()))
  }

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor
  }

  return (
    <Flex direction="column" {...rest} minW={800}>
      <Monaco
        height="80vh"
        language="json"
        value={JSON.stringify(data, null, 2)}
        onMount={handleEditorDidMount}
        options={{ minimap: { enabled: false } }}
      />
      <Button disabled={!isValid} onClick={handleSave}>
        {isValid ? 'Save' : 'There is an error'}
      </Button>
    </Flex>
  )
}

export default Editor
