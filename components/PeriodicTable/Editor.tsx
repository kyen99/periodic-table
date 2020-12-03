import Monaco from '@monaco-editor/react'
import { Button, Flex } from '@chakra-ui/react'
import { useRef, useEffect, useState } from 'react'

const Editor = ({ data, setData }) => {
  const editorRef = useRef()
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
        // @ts-ignore
        JSON.parse(editorRef.current())
        setIsValid(true)
      } catch (e) {
        setIsValid(false)
      }
    }
  }

  const handleSave = () => {
    // @ts-ignore
    setData(JSON.parse(editorRef.current()))
  }

  const handleEditorDidMount = (_getter) => {
    editorRef.current = _getter
  }

  return (
    <Flex direction='column'>
      <Monaco
        height='80vh'
        language='json'
        value={JSON.stringify(data, null, 2)}
        editorDidMount={handleEditorDidMount}
      />
      <Button disabled={!isValid} onClick={handleSave}>
        {isValid ? 'Save' : 'There is an error'}
      </Button>
    </Flex>
  )
}

export default Editor
