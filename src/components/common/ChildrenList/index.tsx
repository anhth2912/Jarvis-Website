import { Children, ReactElement } from 'react'

type Props<T> = {
  render: (item: T, index: number) => ReactElement
  of: T[]
}

export function ChildrenListItem<T>({ render, of }: Props<T>) {
  return Children.toArray(of.map((item, index) => render(item, index)))
}
