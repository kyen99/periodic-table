import YouTube from 'react-youtube'
import { Flex } from '@chakra-ui/react'

const Videos = () => (
  <Flex direction='column' className='no-print'>
    <YouTube videoId='QP0uqR7A1WQ' opts={{ width: '300', height: '170' }} />
    <br />
    <YouTube videoId='VRl1KzuJcBw' opts={{ width: '300', height: '170' }} />
    <br />
    <YouTube videoId='k8g2hN55gVo' opts={{ width: '300', height: '170' }} />
    <br />
    <YouTube videoId='HAB4Ir0k2vY' opts={{ width: '300', height: '170' }} />
    <br />
    <YouTube videoId='mLUrHxfDewk' opts={{ width: '300', height: '170' }} />
  </Flex>
)

export default Videos
