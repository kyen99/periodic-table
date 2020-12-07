import Fireworks from 'fireworks-canvas'
import Head from 'next/head'
import { useRef, useLayoutEffect } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'

const Celebration = ({ setShow }) => {
  const container = useRef(null)

  useLayoutEffect(() => {
    const f = new Fireworks(container.current, {
      maxRockets: 3, // max # of rockets to spawn
      rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
      numParticles: 50, // number of particles to spawn when rocket explodes (+0-10)
      explosionMinHeight: 0.2, // percentage. min height at which rockets can explode
      explosionMaxHeight: 0.9, // percentage. max height before a particle is exploded
      explosionChance: 0.08, // chance in each tick the rocket will explode
    })
    const stop = f.start()
  }, [])

  return (
    <>
      <Head>
        <style>{`.no-print { visibility: hidden }`}</style>
      </Head>
      <Box
        position='absolute'
        m={0}
        top={0}
        left={0}
        w='100vw'
        h='100vh'
        bgColor='rgba(0,0,0, 0.8)'
        ref={container}
        zIndex={1}
        overflow='hidden'
      >
        <Flex
          direction='column'
          justify='center'
          align='center'
          position='absolute'
          left={0}
          top={0}
          h='100vh'
          w='100vw'
        >
          <Heading color='white' fontSize={64}>
            CONGRATULATIONS!!!
          </Heading>
          <Heading color='white' fontSize={64}>
            YOU FINISHED!!!
          </Heading>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Flex>
      </Box>
    </>
  )
}

export default Celebration
