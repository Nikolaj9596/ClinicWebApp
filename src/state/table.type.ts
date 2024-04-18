import { ReactNode } from "react"
import { TableStylesType } from "./core.type"

export type TablePropsType = {
  headTableRow: ReactNode
  bodyTableRows: Array<ReactNode>
  tableStyles: TableStylesType
}

export type TablePagePropsType = {
  table: ReactNode
}
