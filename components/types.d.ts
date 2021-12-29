interface iElement {
  symbol: string
  color: string
  column: string
  row: string
  name: string
  mass: string
  number: string
}

interface iPokemon {
  plength: string
  ptype: string
  column: string
  row: string
  name: string
  species: string
  pweight: string
  stage: string
}

interface iNumbers {
  title: string
  rows: number
  columns: number
  elements: {
    [key: string]: iElement
  }
}

interface iData {
  title: string
  elementCount?: number
  elements: {
    [key: string]: iElement
  }
}
