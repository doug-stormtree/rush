'use client'

import { Spinner } from '@chakra-ui/react'
import QuestionTile from './components/QuestionMenu/QuestionTile'
import useQuestions from './components/QuestionMenu/useQuestions'

export default function Page() {
  const { isLoading, questions, error } = useQuestions()

  return (
    <>
      { isLoading ? (
        <Spinner />
      ) : questions ? (
        <QuestionTile question={questions[0]} expanded={true} />
      ) : (
        <span>{JSON.stringify(error)}</span>
      )}
    </>
  )
}