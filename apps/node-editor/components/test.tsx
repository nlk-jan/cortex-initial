import React from 'react'

export interface TestProps {
    text: string
}

export const Test = (props: TestProps) => {
  return (
    <div>{props.text}</div>
  )
}

