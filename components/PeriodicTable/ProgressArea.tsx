import { Box, Button, Heading, Progress } from '@chakra-ui/react'

const ProgressArea = ({ count, setShowCelebration, ...rest }) => {
  const totalElements = 120
  return (
    <Box w={300} {...rest} class='no-print'>
      {count < totalElements ? (
        <Box>
          <Heading fontSize={20}>
            Elements needed: {totalElements - count}
          </Heading>
          <Progress size='lg' max={totalElements} value={count} w='100%' />
        </Box>
      ) : (
        <Button onClick={() => setShowCelebration(true)} w='100%'>
          Show Celebration
        </Button>
      )}
    </Box>
  )
}

export default ProgressArea
