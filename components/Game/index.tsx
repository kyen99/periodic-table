import { Box, Button, Flex, Grid, Heading, Fade, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Guide from '../PeriodicTable/Guide'
import elements from './elements.json'
import GameTile from './GameTile'
import Navbar from '../../components/navbar'

const rows = Array(11).fill(0)
const cols = Array(18).fill(0)

const GameDisplay = () => {
  const [tiles, setTiles] = useState([]) // current game state (not including draggable state)
  const [savedState, setSavedState] = useState([]) // saved game state (combined state)
  const [celebrate, setCelebrate] = useState(false)
  const randomPositions = (() => {
    const positions = []
    rows.forEach((_, rowI) => {
      cols.forEach((_, colI) => {
        positions.push([rowI + 1, colI + 1, Math.random()])
      })
    })
    return positions.sort((a, b) => (a[2] < b[2] ? -1 : 1))
  })()

  useEffect(() => {
    const savedData = JSON.parse(
      window.localStorage.getItem('gameData') || '[]'
    )
    if (savedData?.length) {
      setTiles(savedData)
      setSavedState(savedData)
    } else {
      resetTiles()
    }
  }, [])

  useEffect(() => {
    if (savedState.length) {
      window.localStorage.setItem('gameData', JSON.stringify(savedState))
    }
  }, [savedState])

  const resetTiles = () => {
    const newTiles = Object.keys(elements).map((s, i) => ({
      ...elements[s],
      rColumn: elements[s].column,
      rRow: elements[s].row,
    }))
    setTiles(newTiles)
    setSavedState(newTiles)
  }

  const randomizeTiles = () => {
    const newTiles = Object.keys(elements).map((s, i) => ({
      ...elements[s],
      rColumn: randomPositions[i][1],
      rRow: randomPositions[i][0],
    }))
    setTiles(newTiles)
    setSavedState(newTiles)
  }

  const handleCelebrate = () => {
    setCelebrate(true)
    setTimeout(() => {
      setCelebrate(false)
    }, 2000)
  }

  const updateSavedState =
    (symbol: string) =>
    (row: number, column: number): void => {
      setSavedState(
        savedState.map((tile) => {
          if (tile.symbol.toLowerCase() === symbol.toLowerCase())
            return { ...tile, rRow: row, rColumn: column }
          return tile
        })
      )
    }

  return (
    <Flex
      align="center"
      direction="column"
      h="100vh"
      postion="relative"
      flex={1}
    >
      <Navbar selected="game" flex={1} />
      <Heading py={25}>Kai's Periodic Table Game</Heading>
      <Box w={950} h={800} position="relative">
        <Guide margin="auto" top={0} />
        {tiles.length > 0 &&
          tiles.map((t) => {
            return (
              <GameTile
                key={t.symbol}
                element={t}
                startX={t.rColumn}
                startY={t.rRow}
                celebrate={handleCelebrate}
                update={updateSavedState(t.symbol)}
              />
            )
          })}
      </Box>
      <Flex p={25} justify="space-between" gridGap={5}>
        <Button onClick={randomizeTiles}>Mix Tiles</Button>
        <Link href="/">
          <Button>Back to Builder</Button>
        </Link>
      </Flex>
      {celebrate && (
        <Grid placeItems="center" position="absolute" w="100%" h="100%">
          <Fade in={celebrate}>
            <Text fontSize="15em" zIndex={1}>
              👍
            </Text>
          </Fade>
          <Box position="absolute" w="100%" h="100%"></Box>
        </Grid>
      )}
    </Flex>
  )
}

export default GameDisplay
