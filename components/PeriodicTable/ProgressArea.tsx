import { Box, Button, Heading, Progress } from '@chakra-ui/react'

interface iProps {
  count: number
  setShowCelebration: (value: boolean) => void
}

const ProgressArea = ({ count, setShowCelebration, ...rest }: iProps) => {
  const totalElements = 120
  return (
    <Box w={300} {...rest}>
      {count < totalElements ? (
        <Box class='no-print'>
          <Heading fontSize={20}>
            Elements needed: {totalElements - count}
          </Heading>
          <Progress size='lg' max={totalElements} value={count} w='100%' />
        </Box>
      ) : (
        <Button
          onClick={() => setShowCelebration(true)}
          w='100%'
          class='no-print'
        >
          Show Celebration
        </Button>
      )}
    </Box>
  )
}

export default ProgressArea
