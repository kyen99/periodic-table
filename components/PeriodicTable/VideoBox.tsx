import YouTube from 'react-youtube'
import { chakra, Box, Flex } from '@chakra-ui/react'

const videoIds = [
  'QP0uqR7A1WQ',
  'VRl1KzuJcBw',
  'k8g2hN55gVo',
  'HAB4Ir0k2vY',
  'mLUrHxfDewk',
  'k_9KTww6DiU',
  'SYvrOpOaaWo',
  'IaoRo_xvRDw',
  'cEoYsjWKQ1s',
  '_tOYblZwNN0',
]

const opts = { width: '300', height: '170' }

const Video = chakra(YouTube)

const VideoBox = (props) => (
  <Flex
    className='no-print'
    direction='column'
    height='calc(100vh - 100px)'
    overflow='scroll'
    {...props}
  >
    {videoIds.map((vId) => (
      <Box key={vId}>
        <Video videoId={vId} opts={opts} mb={4} />
      </Box>
    ))}
  </Flex>
)

export default VideoBox
