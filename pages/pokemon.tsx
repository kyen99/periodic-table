import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Panel from '../components/Pokemon/panel'
import PokemonTable from '../components/Pokemon'
import Navbar from '../components/navbar'

const defaultData: iData | null = { title: '', elements: {} }

export default function Home() {
  const [data, setData] = useState<iData>(null)

  useEffect(() => {
    setData(
      JSON.parse(window.localStorage.getItem('pokemon-data')) || defaultData
    )
  }, [])

  useEffect(() => {
    if (data) window.localStorage.setItem('pokemon-data', JSON.stringify(data))
  }, [data])

  const handleReset = () => {
    setData(defaultData)
  }

  if (!data) return null

  return (
    <Box height="100vh">
      <Head>
        <title>Pokemon Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar selected="pokemon" />
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
        <PokemonTable p={4} data={data} setData={setData} />
      </Flex>
    </Box>
  )
}
