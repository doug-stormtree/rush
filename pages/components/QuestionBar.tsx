import React from 'react'
import { client } from '../../tina/__generated__/client'

interface Props {
  questions: {
    title: string
    imageURL: string
  }[]
}

const QuestionBar: React.FC<Props> = ({ questions }) => {
  return (
    <>{questions[0].title}</>
  )
}
export default QuestionBar

export const getStaticProps = async () => {
  const questionsResponse = await client.queries.questionConnection()
  const questions = questionsResponse.data.questionConnection.edges?.map((question) => {
    return { 
      title: question?.node?.title,
      imageURL: question?.node?.image,
    }
  })

  return {
    props: {
      questions: questions,
    },
  }
}