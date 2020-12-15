import { useState, useEffect } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import Element from '../PeriodicTable/Element'

const GameTile = ({ element, startX, startY, celebrate, update, ...rest }) => {
  const { row, column } = element
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState([])
  const [match, setMatch] = useState(false)
  const correctPosition = [parseInt(column) * 50, parseInt(row) * 50]

  useEffect(() => {
    checkMatch()
  }, [])

  useEffect(() => {
    checkMatch()
    if (position[0] && position[1]) {
      update(position[1] / 50, position[0] / 50)
    }
  }, [position])

  const checkMatch = (): void => {
    let match: boolean
    if (position.length) {
      match =
        position[0] === correctPosition[0] && position[1] === correctPosition[1]
      if (match) celebrate()
    } else {
      match =
        startX * 50 === correctPosition[0] && startY * 50 === correctPosition[1]
    }
    setMatch(match)
  }

  const handleStop = (e: DraggableEvent, data: DraggableData): void => {
    const { lastX, lastY } = data
    const { offsetLeft, offsetTop } = data.node
    setPosition([offsetLeft + lastX, offsetTop + lastY])
    setActive(false)
  }

  return (
    <Draggable
      grid={[50, 50]}
      bounds='parent'
      onStart={() => setActive(true)}
      onStop={handleStop}
    >
      <Element
        element={element}
        zoom={false}
        position='absolute'
        cursor='pointer'
        opacity={match ? 1 : 0.6}
        top={startY * 50}
        left={startX * 50}
        boxShadow={active ? '0 0 15px 5px #ccc' : 'initial'}
        zIndex={active ? 2 : match ? 0 : 1}
        {...rest}
      />
    </Draggable>
  )
}

export default GameTile
