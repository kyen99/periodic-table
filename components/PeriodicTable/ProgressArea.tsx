import { Box, Button, Heading, Progress } from '@chakra-ui/react'
import Link from 'next/link'

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
        <Box className='no-print'>
          <Button onClick={() => setShowCelebration(true)}>
            Show Celebration
          </Button>
          &nbsp;
          <Link href='/game'>
            <Button>Play Game</Button>
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default ProgressArea
