import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Panel from '../components/Panel'
import PeriodicTable from '../components/PeriodicTable'
import Fireworks from '../components/Celebration'
import Navbar from '../components/navbar'

const defaultData: iData | null = { title: '', elements: {} }

export default function Home() {
  const [data, setData] = useState<iData>(null)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem('data')) || defaultData)
  }, [])

  useEffect(() => {
    if (data) window.localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const handleReset = () => {
    setData(defaultData)
  }

  if (!data) return null

  return (
    <Box height="100vh">
      <Head>
        <title>Periodic Table Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showCelebration && <Fireworks setShow={setShowCelebration} />}
      <Navbar selected="home" />
      <Flex>
        <Panel
          className="no-print"
          minW="350px"
          p={4}
          bgColor="#ccc"
          height="100vh"
          data={data}
          setData={setData}
          reset={handleReset}
        />
        <PeriodicTable
          p={4}
          data={data}
          setData={setData}
          setShowCelebration={setShowCelebration}
        />
      </Flex>
    </Box>
  )
}
