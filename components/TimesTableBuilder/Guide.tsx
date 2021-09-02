import { Box, Grid, Text } from '@chakra-ui/react'

const Guide = ({ rows, columns, ...props }) => {
  const c = new Array(parseInt(columns || '0')).fill(1)
  const r = new Array(parseInt(rows || '0')).fill(1)
  return (
    <Box
      className="no-print"
      position="absolute"
      top={-50}
      zIndex={-1}
      {...props}
    >
      <Grid templateColumns={`repeat(${columns + 1}, 1fr)`}>
        <Grid h={50} w={50} placeItems="center" />
        {c.map((_, ci) => (
          <Grid key={ci} h={50} w={50} placeItems="center">
            <Text color="#ccc">{ci + 1}</Text>
          </Grid>
        ))}
      </Grid>
      {r.map((_, ri) => (
        <Grid key={ri} templateColumns={`repeat(${columns + 1}, 1fr)`}>
          <Grid h={50} w={50} placeItems="center">
            <Text color="#ccc">{ri + 1}</Text>
          </Grid>
          {c.map((_, ci) => (
            <Box
              key={ci}
              border="1px dotted #ccc"
              h={50}
              w={50}
              onClick={() => alert('hi')}
            />
          ))}
        </Grid>
      ))}
    </Box>
  )
}

export default Guide
