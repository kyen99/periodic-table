import {
  Flex,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
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
          set(new Date(), { hours: 19, minutes: 30, seconds: 0 }),
          new Date()
        )
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Flex direction="column">
      <Navbar selected="bathtime" />
      <Grid placeItems="center" height="100vh">
        <Stat transform="scale(4)">
          <StatLabel>Bath Time at 7:30pm</StatLabel>
          <StatNumber>
            in {Math.floor(time / 60 / 60)} hours
            <br />
            {Math.floor(time / 60)} minutes
            <br />
            {time % 60} seconds
          </StatNumber>
          <StatHelpText>{currentTime.toLocaleTimeString()}</StatHelpText>
          <Progress hasStripe value={10800 - time} max={10800} />
        </Stat>
      </Grid>
    </Flex>
  )
}

export default BathTime
