import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Panel from '../components/TimesTableBuilder/Panel'
import TimesTableBuilder from '../components/TimesTableBuilder'
import Navbar from '../components/navbar'
import { formDefault } from '../components/TimesTableBuilder/Panel/ElementForm'

const defaultData: iNumbers | null = {
  title: '',
  rows: 0,
  columns: 0,
  elements: {},
}

export default function Home() {
  const [data, setData] = useState<iNumbers>(null)
  const [showCelebration, setShowCelebration] = useState(false)
  const [form, setForm] = useState(formDefault)

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem('timesdata')) || defaultData)
  }, [])

  useEffect(() => {
    if (data) window.localStorage.setItem('timesdata', JSON.stringify(data))
  }, [data])

  const handleReset = () => {
    setData(defaultData)
  }

  if (!data) return null

  return (
    <Box height="100%" w="100%">
      <Head>
        <title>Times Table Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected="timestable" />
      <Flex>
        <Panel
          className="no-print"
          w="350px"
          p={4}
          bgColor="#ccc"
          height="100vh"
          data={data}
          setData={setData}
          reset={handleReset}
          form={form}
          setForm={setForm}
        />
        <TimesTableBuilder
          p={4}
          data={data}
          setData={setData}
          setShowCelebration={setShowCelebration}
          w="100%"
          setForm={setForm}
        />
      </Flex>
    </Box>
  )
}
