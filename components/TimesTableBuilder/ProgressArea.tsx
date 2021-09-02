import { Box, Button, Heading, Progress } from '@chakra-ui/react'
import Link from 'next/link'

interface iProps {
  count: number
  elementCount?: number
  setShowCelebration: (value: boolean) => void
}

const ProgressArea = ({
  count,
  elementCount = 120,
  setShowCelebration,
  ...rest
}: iProps) => {
  return (
    <Box w={300} {...rest}>
      {count < elementCount ? (
        <Box class="no-print">
          <Heading fontSize={20}>
            Elements needed: {elementCount - count}
          </Heading>
          <Progress size="lg" max={elementCount} value={count} w="100%" />
        </Box>
      ) : (
        <Box className="no-print">
          <Button onClick={() => setShowCelebration(true)}>
            Show Celebration
          </Button>
          &nbsp;
          <Link href="/game">
            <Button>Play Game</Button>
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default ProgressArea
