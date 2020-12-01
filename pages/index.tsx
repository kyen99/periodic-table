import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Left from '../components/Panel'
import Right from '../components/PeriodicTable'

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
      <Flex direction='row'>
        <Left
          className='no-print'
          minW='350px'
          p={4}
          bgColor='#ccc'
          data={data}
          setData={setData}
          reset={handleReset}
          height='100vh'
        />
        <Right p={4} data={data} />
      </Flex>
    </Box>
  )
}
