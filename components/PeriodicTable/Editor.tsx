import Monaco from '@monaco-editor/react'
import { Button, Flex } from '@chakra-ui/react'
import { useRef, useEffect, useState } from 'react'

const Editor = ({ data, setData }) => {
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
        JSON.parse(editorRef.current())
        setIsValid(true)
      } catch (e) {
        setIsValid(false)
      }
    }
  }

  const handleSave = () => {
    setData(JSON.parse(editorRef.current()))
  }

  const handleEditorDidMount = (_ref) => {
    editorRef.current = _ref
  }

  const handleEditorWillMount = (monaco) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'http://myserver/foo-schema.json',
          fileMatch: ['*'],
          schema: {
            type: 'object',
            properties: {
              p1: {
                enum: ['v1', 'v2'],
              },
              p2: {
                $ref: 'http://myserver/bar-schema.json',
              },
            },
          },
        },
      ],
    })
  }

  return (
    <Flex direction='column'>
      <Monaco
        height='80vh'
        language='json'
        value={JSON.stringify(data, null, 2)}
        // editorWillMount={handleEditorWillMount}
        editorDidMount={handleEditorDidMount}
        options={{ minimap: { enabled: false } }}
      />
      <Button disabled={!isValid} onClick={handleSave}>
        {isValid ? 'Save' : 'There is an error'}
      </Button>
    </Flex>
  )
}

export default Editor
