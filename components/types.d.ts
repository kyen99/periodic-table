interface iElement {
  symbol: string
  color: string
  column: string
  row: string
  name: string
  number: string
}

interface iData {
  title: string
  elements: {
    [key: string]: iElement
  }
}