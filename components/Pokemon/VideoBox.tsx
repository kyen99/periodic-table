import YouTube from 'react-youtube'
import { Box, Flex } from '@chakra-ui/react'

const videoIds = ['P5v9iCnwypU', 'kheVwSoF-Jc']

const opts = { width: '300', height: '170' }

const VideoBox = (props: any) => (
  <Flex
    className="no-print"
    direction="column"
    height="calc(100vh - 100px)"
    overflow="scroll"
    {...props}
  >
    {videoIds.map((vId) => (
      <Box key={vId}>
        <Box as={YouTube} videoId={vId} opts={opts} mb={4} />
      </Box>
    ))}
  </Flex>
)

export default VideoBox
