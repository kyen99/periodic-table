import { memo, useState, useEffect } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import Element from '../PeriodicTable/Element'

const GameTile = ({ element, startX, startY, celebrate, update, ...rest }) => {
  const { row, column } = element
  const correctPosition = [parseInt(column) * 50, parseInt(row) * 50]
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState([])
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const match =
      position[0] === correctPosition[0] && position[1] === correctPosition[1]
    setMatch(match)
    if (position[0] && position[1]) update(position[1] / 50, position[0] / 50)
    if (match) celebrate()
  }, [position])

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
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
        zIndex={active ? 2 : 'initial'}
        {...rest}
      />
    </Draggable>
  )
}

export default GameTile
