import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Panel from '../components/Panel'
import PeriodicTable from '../components/PeriodicTable'

const defaultData = { title: '', elements: {} }

export default function Home() {
  let storedData
  if (process.browser) {
    storedData = JSON.parse(window.localStorage.getItem('data'))
  }

  const [data, setData] = useState(storedData || defaultData)

  useEffect(() => {
    if (process.browser)
      window.localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const handleReset = () => {
    setData(defaultData)
  }

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
