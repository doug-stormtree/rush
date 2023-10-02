'use client'

import type { ReactElement } from 'react'
import QuestionTile from './components/QuestionMenu/QuestionTile'

export default function Page() {
  return (
    <QuestionTile
      title='Neighbourhood to Naturehood'
      subtitle='Make the human-Nature connection for your health and inner peace. Live your best life in a Naturehood.'
      imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/500px-Shaqi_jrvej.jpg'
      expanded
    />
  )
}