import {
  Flex,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import set from 'date-fns/set'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import Navbar from '../components/navbar'

const BathTime = () => {
  const [time, setTime] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setTime(
        differenceInSeconds(
          set(new Date(), { hours: 20, minutes: 30, seconds: 0 }),
          new Date()
        )
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const hours = Math.floor(time / 60 / 60)
  const minutes = Math.floor(time / 60 - hours * 60)
  const seconds = time % 60

  return (
    <Flex direction="column">
      <Navbar selected="bathtime" position="sticky" top={0} />
      <Grid placeItems="center" height="100vh">
        <Stat transform="scale(4)">
          <StatLabel>
            Current time is {currentTime.toLocaleTimeString()}
          </StatLabel>
          <StatLabel>Bath Time is 8:30pm</StatLabel>
          <StatNumber>
            in {hours} hours
            <br />
            {minutes} minutes
            <br />
            {seconds} seconds
          </StatNumber>
          <Progress hasStripe value={10800 - time} max={10800} />
        </Stat>
      </Grid>
    </Flex>
  )
}

export default BathTime
