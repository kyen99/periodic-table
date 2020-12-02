import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Panel from '../components/Panel'
import PeriodicTable from '../components/PeriodicTable'

const defaultData = { title: '', elements: {} }

export default function Home() {
  const [data, setData] = useState(null)

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
    <Box height='100vh'>
      <Head>
        <title>Periodic Table Builder</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex>
        <Panel
          className='no-print'
          minW='350px'
          p={4}
          bgColor='#ccc'
          height='100vh'
          data={data}
          setData={setData}
          reset={handleReset}
        />
        <PeriodicTable p={4} data={data} />
      </Flex>
    </Box>
  )
}
